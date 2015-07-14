/**
   Some gross javascript to make my homepage pretty and functional.
   
   xXx
   1. This stuff probably shouldn't be rendered client side.
   2. This probably shouldn't use so much straight up string-html crap.
   3. This should probably take advantage of jQuery a lot more then it does.
   4. I should probably be using underscore.js or something to make JS syntax a little easier to digest.
   5. Eventually I should have some controls to consolidate, paginate, and sort the data on my main page.

   Making liberal use of the "Make it work, then make work better" matra.

   -Adam
*/


/**
   Email obfuscator script 2.1 by Tim Williams, University of Arizona
   Random encryption key feature by Andrew Moulden, Site Engineering Ltd
   This code is freeware provided these four comment lines remain intact
   A wizard to generate this code is at http://www.jottings.com/obfuscator/
*/
function writeContactSection() {
    function decode(coded, key){ 
        shift=coded.length
        link=""
        for (i=0; i<coded.length; i++) {
            if (key.indexOf(coded.charAt(i))==-1) {
                ltr = coded.charAt(i)
                link += (ltr)
            }
            else {     
                ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
                link += (key.charAt(ltr))
            }
        }
        return link;
    }
    
    var contactInfoList = $("<ul></ul>");
    
    var emailCoded = "jF@RoRjrF60r16H.D6j";
    var emailKey = "Nd1pxTu4V3JYfE0ABKyZoWl5CHMQX7cmn9eqUOg6SaIPzibhGDj2vFw8LrtsRk";
    email = decode(emailCoded, emailKey);    
    contactInfoList.append("<li><a href='mailto:"+email+"'>"+email+"</a></li>");

    var phoneCoded = "fK1.V1K.mfKf";
    var phoneKey = "T78HitArOZzxoV3Sn6pLWNYgXk4dP1C02asQBUmMFKqehjv5JRybwlGc9EufID";
    phoneNumber = decode(phoneCoded, phoneKey);    
    contactInfoList.append("<li>" + phoneNumber + "</li>");

    $("#contact_info_container").append(contactInfoList);
}

/**
   Pulls book data out of my stuff object, sorts it, and inserts 
   it into the DOM nicely
*/
function writeBooksSection() {
    // Build Tag -> Hue Map
    var tagMap = new Object();
    for(i in ADAMS_STUFF["books"]) {
        var tags = ADAMS_STUFF["books"][i]["tags"];
        for(j in tags) {
            var tag = tags[j]
            tagMap[tag] = "";
        }
    }
    populateColorMap(tagMap);

    var section = $("#bookshelf_container");

    // Header
    section.append($("<h1>bookshelf</h1>"));

    // Book List
    var bookList = $("<ul>");
    booksSorted = ADAMS_STUFF["books"].sort(
        function(lhs, rhs) {
            var leftTitle = lhs["title"].toLowerCase().replace(/^the /,"");
            var rightTitle = rhs["title"].toLowerCase().replace(/^the /,"");

            return (leftTitle < rightTitle) ? -1 : 1;
        });

    for(i in booksSorted ) {
        var book = booksSorted[i];

        // Title
        var toPrint = $("<li>");
        if(book["title"].length > 100) {
            toPrint.text(book["title"].substring(0, 100) + "...");
        }
        else {
            toPrint.text(book["title"]);   
        }

        // Author
        var author = book["author"];
        if(author) {
            toPrint
                .append($("<span>").css("font-style","italic").text(" by "))
                .append(author);
        }

        // Tags
        var sortedTags = book["tags"].sort();
        if(sortedTags) {
            toPrint.append(" - ");
            for(j in sortedTags) {
                var tag = sortedTags[j];
                var hue = tagMap[tag].toString();
                toPrint.append(
                    $("<span>")
                        .css("background", "hsl(" + hue + ", 100%, 90%)")
                        .text(tag)
                        .addClass("tag")
                );
            }
        }

        // Append Book String
        bookList.append(toPrint);
    }

    section.append(bookList);
}


/**
   Pulls concert data out of my stuff object, sorts it, and inserts 
   it into the DOM nicely
*/
function writeConcertsSection() {
    var concertList = $("<ul>");

    $("#ticket_stubs_container")
        .append($("<h1>stubs</h1>"))
        .append(concertList);
    
    var concerts = ADAMS_STUFF["concerts"].sort(
        function(lhs, rhs) {
            return rhs["start_date"] - lhs["start_date"];
        });

    for(i in concerts) {
        var concert = concerts[i];
        
        // Show title
        var concertInfo = $("<li>").css("line-height","20px");

        var showTitle = $("<span>").addClass("concert_title");
        if(concert["title"]) {
            showTitle.append(
                $("<span>")
                    .css({"color":"red"})
                    .append(concert["title"]))
                    .append(": ");
        }
        showTitle.append(concert["artists"].join(", "));

        // Show Meta
        var dateStr = concert["start_date"].toString();
        var date = new Date();
        date.setFullYear(
            dateStr.substring(0,4),
            parseInt(dateStr.substring(4,6)) - 1,
            dateStr.substring(6,8));
        var showMeta = $("<span>").addClass("concert_meta");
        showMeta
            .append(concert["venue"])
            .append(" on ")
            .append($("<span>").addClass("date").append(date.toDateString()));
    
        concertInfo
            .append(showMeta)
            .append(showTitle);
        concertList.append(concertInfo);
    }
}

/**
   Hits a lastFm proxy on my server, gets the latest tracks I've scrobbled,
   inserts the most recent one into the DOM.
*/
function writeLastFmSection() {
    var trackListForDom = $("<ul></ul>");
    var li = $("<li></li>");
    var loadingElement = 
        $("<span>")
            .text("i'm loading it, give me a sec!")
            .css({"font-style":"italic","color":"#aaa"});
    trackListForDom.append(li.append(loadingElement));

    $("#latest_tracks_container")
        .append($("<h1>").text("latest listen"))
        .append(trackListForDom);

    $.get("/api_proxy", function(data) {
        var track = data["recenttracks"]["track"][0];

        var latestListenLink = (
            $("<a>" + track["artist"]["#text"] + " - " + track["name"] + "</a>")
                .attr("target","_blank")
                .attr("href","http://www.last.fm/user/georgi0u/tracks"));

        latestListenLink.hide();
        li.empty();
        li.append(latestListenLink);
        latestListenLink.fadeIn();
    });
}

$(function() {
    writeContactSection();
    writeBooksSection();
    writeConcertsSection();
    writeLastFmSection();

    var toBeSorted = $(".tablesorter");
    if(toBeSorted.length)
        toBeSorted.tablesorter({sortList: [[0,0], [1,0]]}); 
});
