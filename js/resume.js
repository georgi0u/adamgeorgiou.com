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
});
