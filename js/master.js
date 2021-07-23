import { books } from "./books.js";
import { concerts } from "./concerts.js";
import { createColorMap } from "./colors.js";
function writeContactSection() {
    function decode(coded, key) {
        const shift = coded.length;
        let decoded = "";
        for (let i = 0; i < coded.length; i++) {
            if (key.indexOf(coded.charAt(i)) == -1) {
                decoded += coded.charAt(i);
            }
            else {
                const ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
                decoded += key.charAt(ltr);
            }
        }
        return decoded;
    }
    const emailCoded = "jF@RoRjrF60r16H.D6j";
    const emailKey = "Nd1pxTu4V3JYfE0ABKyZoWl5CHMQX7cmn9eqUOg6SaIPzibhGDj2vFw8LrtsRk";
    const email = decode(emailCoded, emailKey);
    const link = $(`<a target="_blank" href="mailto:${email}">${email}</a>`);
    const toModify = $("#email");
    if (toModify.prop('tagName') === 'A') {
        toModify.attr('href', `mailto:${email}`);
    }
    else {
        $("#email").append(link);
    }
}
function writeBooksSection() {
    // Build Tag -> Hue Map
    const tagLists = books.map((book) => book["tags"]);
    const flattenedTags = tagLists.reduce((flattenedTags, list) => flattenedTags.concat(list), []);
    const uniqueTags = new Set(flattenedTags);
    const tagColorMap = createColorMap(uniqueTags);
    const section = $("#bookshelf_container");
    // Header
    section.append($("<h1><a target='_blank' href='https://www.goodreads.com/user/show/4860036-adam-georgiou'>bookshelf</a></h1>"));
    // Book List
    const bookList = $("<ul>");
    books.forEach((book) => {
        // Title
        const toPrint = $("<li>");
        let title = book["title"]["name"];
        if (title.length > 100) {
            title = title.substring(0, 100) + "...";
        }
        const iTitle = $("<i>");
        iTitle.append(title);
        if (book["title"]["link"]) {
            const link = $("<a target=\"_blank\">");
            link.append(iTitle);
            link.attr("href", book["title"]["link"]);
            toPrint.append(link);
        }
        else {
            toPrint.append(iTitle);
        }
        // Author
        const author = book["author"];
        toPrint.append($("<span>").text(" by "));
        if (author['link']) {
            const authorLink = $("<a target=\"_blank\">");
            authorLink.attr("href", author["link"]);
            authorLink.text(author["name"]);
            toPrint.append(authorLink);
        }
        else {
            toPrint.append(author['name']);
        }
        // Tags        
        const tags = book["tags"];
        if (tags) {
            if (tags.indexOf("abandoned") != -1) {
                toPrint.append($("<span>")
                    .append(toPrint.contents())
                    .css('text-decoration', 'line-through'));
            }
            const sortedTags = tags.sort();
            toPrint.append(" - ");
            const toPrintTags = $("<span style='display:inline-block;'></span>");
            sortedTags.forEach((tag) => {
                const color = tagColorMap.get(tag);
                if (color == null) {
                    return;
                }
                toPrintTags.append($("<span>")
                    .css('background', tag == "abandoned" ? '#DDDDDD' : `hsl(${color}, 100%, 85%)`)
                    .text(tag.toLowerCase())
                    .addClass("tag"));
            });
            toPrint.append(toPrintTags);
        }
        // Append Book String
        bookList.append(toPrint);
    });
    section.append(bookList);
}
/**
   Pulls concert data out of my stuff object, sorts it, and inserts
   it into the DOM nicely
*/
function writeConcertsSection() {
    const concertList = $("<ul>");
    $("#ticket_stubs_container")
        .prepend($("<h1>stubs</h1>"))
        .append(concertList);
    const sortedConcerts = concerts.sort((lhs, rhs) => rhs["start_date"] - lhs["start_date"]);
    sortedConcerts.forEach((concert) => {
        // Show title
        const concertInfo = $("<li>");
        const showTitle = $("<span>").addClass("concert_title");
        if (concert["title"]) {
            showTitle.append($("<span>")
                .css({ "color": "red" })
                .append(concert["title"]))
                .append(": ");
        }
        showTitle.append(concert["artists"].join(", "));
        // Show Meta
        const dateStr = concert["start_date"].toString();
        const date = new Date();
        date.setFullYear(parseInt(dateStr.substring(0, 4)), parseInt(dateStr.substring(4, 6)) - 1, parseInt(dateStr.substring(6, 8)));
        const showMeta = $("<span>").addClass("concert_meta");
        showMeta
            .append(" @ ")
            .append(concert["venue"])
            .append(" on ")
            .append($("<span>").addClass("date").append(date.toDateString()));
        concertInfo
            .append(showTitle)
            .append(showMeta);
        concertList.append(concertInfo);
    });
}
/**
   Limits sub containers so they only show N items, and then adds links for
   expanding and collapsing the > N remaining items.
*/
function limitSubContainers() {
    const ITEM_LIMIT = 3;
    const subContainers = $(".sub_container.collapsible > ul");
    subContainers.each((index, list) => {
        if ($(list).children().length <= ITEM_LIMIT) {
            return;
        }
        const hiddenItems = [];
        $(list).children('li').each((index, item) => {
            if (index < ITEM_LIMIT) {
                return;
            }
            hiddenItems.push(item);
            $(item).hide();
            $(item).remove();
        });
        const expand = $(`<a title='Show remaining ${hiddenItems.length}  items.' ` +
            `class='expand_button'>(show more)</a>`);
        const collapse = $("<a class='collapse_button'>(show less of the above)</a>");
        collapse.hide();
        $(list).parent().append(expand);
        $(list).parent().append(collapse);
        expand.click(() => {
            $(list).append(hiddenItems);
            $(hiddenItems).show();
            expand.hide();
            collapse.show();
            $(list).parent().toggleClass('expanded');
        });
        collapse.click(() => {
            $(hiddenItems).hide();
            $(hiddenItems).remove();
            collapse.hide();
            expand.show();
            const headerOffset = $($(list).siblings('h1')[0]).offset();
            if (headerOffset) {
                $('html, body').animate({ scrollTop: headerOffset.top - 50 }, 0);
            }
            $(list).parent().toggleClass('expanded');
        });
    });
}
function colorResumeSubcategoryTags() {
    const elements = $("#resume .sub_category_tags > li");
    if (!elements.length) {
        return;
    }
    // Populate Color Map
    const tags = new Set();
    elements.each((index, element) => {
        tags.add($(element).text());
    });
    const tagColorMap = createColorMap(tags);
    // Color Tags
    elements.each((index, element) => {
        var tag = $(element).text();
        var hue = tagColorMap.get(tag);
        $(element).css("background", "hsl(" + hue + ", 100%, 80%");
    });
}
function resumeConsiseVerboseButton() {
    let expand_button_content_toggle = "(verbose)";
    $("#expand_button").text("(concise)");
    $("#expand_button").click(function () {
        $(".verbose").toggle();
        $(".concise").toggle();
        const temp = $(this).text();
        $(this).text(expand_button_content_toggle);
        expand_button_content_toggle = temp;
    });
}
function writeAboutControls() {
    const expand_button = $("<span>.. <a style='cursor:pointer;font-style:italic;'> continued.</a></span>");
    expand_button.click(() => {
        $("#more_about").toggle();
        expand_button.remove();
    });
    $("#brief_about").append(expand_button);
}
$(function () {
    writeContactSection();
    writeBooksSection();
    writeConcertsSection();
    writeAboutControls();
    limitSubContainers();
    colorResumeSubcategoryTags();
    resumeConsiseVerboseButton();
    $('body').show();
});
