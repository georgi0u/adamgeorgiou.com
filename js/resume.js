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


function colorResumeSubcategoryTags() {
    var elements = $("#resume .sub_category_tags > li");
    if(!elements.length)
        return;

    // Populate Color Map
    var tagMap = new Object();
    elements.each(
        function(index) {
            var tag = $(this).text();
            tagMap[tag] = "";
        }
    );
    populateColorMap(tagMap);

    // Color Tags
    elements.each(
        function(index) {
            var tag = $(this).text();
            var hue = tagMap[tag];
            $(this).css("background", "hsl(" + hue + ", 100%, 90%");
        }
    );
}

$(function() {
    colorResumeSubcategoryTags();
    writeContactSection();

    var expand_button_content_toggle = "(concise)";
    $("#expand_button").text("(verbose)");
    $("#expand_button").click(function() {
        $(".verbose").fadeToggle();
        $(".concise").fadeToggle();

        var temp = $(this).text();
        $(this).text(expand_button_content_toggle);
        expand_button_content_toggle = temp
    });
});
