import { books } from "./books.js";
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
    const phoneCoded = "fK1.V1K.mfKf";
    const phoneKey = "T78HitArOZzxoV3Sn6pLWNYgXk4dP1C02asQBUmMFKqehjv5JRybwlGc9EufID";
    const phoneNumber = decode(phoneCoded, phoneKey);
    const contactInfoList = $("<ul></ul>");
    contactInfoList.append(`<li><a href='mailto:${email}'>${email}</a></li>`);
    contactInfoList.append(`<li>${phoneNumber}</li>`);
    $("#contact_info_container").append(contactInfoList);
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
            const sortedTags = tags.sort();
            toPrint.append(" - ");
            sortedTags.forEach((tag) => {
                const color = tagColorMap.get(tag);
                if (color == null) {
                    return;
                }
                toPrint.append($("<span>")
                    .css("background", `hsl(${color}, 100%, 90%)`)
                    .text(tag.toLowerCase())
                    .addClass("tag"));
            });
        }
        // Append Book String
        bookList.append(toPrint);
    });
    section.append(bookList);
}
$(function () {
    writeContactSection();
    writeBooksSection();
});
