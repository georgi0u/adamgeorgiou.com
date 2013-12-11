/* 
   Some gross javascript to make my homepage pretty and functional.
   
   # xXx
   1. This stuff probably shouldn't be rendered client side.
   2. This probably shouldn't use so much straight up string-html crap.
   3. This should probably take advantage of jQuery a lot more then it does.
   4. I should probably be using underscore.js or something to make JS syntax a little easier to digest.
   5. Eventually I should have some controls to consolidate, paginate, and sort the data on my main page.

   It works for now.
   -Adam
*/

function writeContactSection() {
    // Email obfuscator script 2.1 by Tim Williams, University of Arizona
    // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
    // This code is freeware provided these four comment lines remain intact
    // A wizard to generate this code is at http://www.jottings.com/obfuscator/
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


function writeBooksSection() {
    // Build Tag -> Hue Map
    var tags = new Object();
    for(i in ADAMS_STUFF["books"]) {
        var book = ADAMS_STUFF["books"][i];
        for(j in book["tags"]) {
            var tag = book["tags"][j]
            tags[tag] = true;
        }
    }
    var numTags = 0;
    for(i in tags) numTags+=1;
    var index = 0;
    for(i in tags) {
        tags[i] = (360/numTags) * index;
        index += 1;
    }

    var section = $("#bookshelf_container");

    // Header
    section.append($("<h1>bookshelf</h1>"));

    // Book List
    var bookList = $("<ul></ul>");
    for(i in ADAMS_STUFF["books"]) {
        var book = ADAMS_STUFF["books"][i];

        // Title
        var toPrint = book["title"];

        // Author
        var author = book["author"];
        if(author)
            toPrint += " <span style='font-style:italic;'>by</span> " + author;

        // Tags
        var sortedTags = book["tags"].sort();
        if(sortedTags) {
            toPrint += " - "
            for(j in sortedTags) {
                var tag = sortedTags[j];
                var hue = tags[tag].toString();
                toPrint += "<span style = 'padding:0 4px 0 4px;margin-right:5px;background: hsl(" + hue + ", 100%, 90%);'>" + tag + "</span>";
            }
        }

        // Append Book String
        bookList.append("<li>" + toPrint + "</li>");
    }

    section.append(bookList);
}



function writeConcertsSection() {
    var section = $("#ticket_stubs_container");

    // Header
    section.append($("<h1>stubs</h1>"));

    // Content
    var concertList = $("<ul></ul>");

    var concerts = ADAMS_STUFF["concerts"].sort(
        function(lhs, rhs) {
            return rhs["start_date"] - lhs["start_date"];
        });

    for(i in concerts) {
        var concert = concerts[i];
        var toPrint = "<span style ='display:table-cell; padding-right:10px;'>" + concert["start_date"] + "</span><span style ='display:table-cell;line-height:20px;'>" ;
        if(concert["title"]) {
            toPrint += "<span style='font-weight:bold;'>" + concert["title"] + "</span> <span style='font-style:italic;'>featuring</span> ";
        }
        toPrint += concert["artists"].join(", ") +  " <span style='font-style:italic;'>@ " + concert["venue"] + "</span></span>";

        
        concertList.append("<li>" + toPrint + "</li>");
    }

    section.append(concertList);
}

$(function() {
    writeContactSection();
    writeBooksSection();
    writeConcertsSection();
});
