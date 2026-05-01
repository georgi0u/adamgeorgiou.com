import { books } from "./books.js";
import { concerts } from "./concerts.js";
import { createColorMap } from "./colors.js";
function span(text) {
    const element = document.createElement("span");
    element.textContent = text;
    return element;
}
function show(element) {
    element.style.display = "";
}
function hide(element) {
    element.style.display = "none";
}
function toggleDisplay(element) {
    element.style.display = element.style.display === "none" ? "" : "none";
}
function onActivate(element, action) {
    element.addEventListener("click", action);
    element.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            action();
        }
    });
}
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
    document.querySelectorAll(".email").forEach((element) => {
        if (element instanceof HTMLAnchorElement) {
            element.href = `mailto:${email}`;
            return;
        }
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = `mailto:${email}`;
        link.textContent = email;
        element.appendChild(link);
    });
}
function writeBooksSection() {
    const section = document.querySelector("#bookshelf_container");
    if (!section) {
        return;
    }
    // Build Tag -> Hue Map
    const tagLists = books.map((book) => book["tags"]);
    const flattenedTags = tagLists.reduce((flattenedTags, list) => flattenedTags.concat(list), []);
    const uniqueTags = new Set(flattenedTags);
    const tagColorMap = createColorMap(uniqueTags);
    // Book List
    const bookList = document.createElement("ul");
    books.forEach((book) => {
        // Title
        const toPrint = document.createElement("li");
        let title = book["title"]["name"];
        if (title.length > 100) {
            title = title.substring(0, 100) + "...";
        }
        const iTitle = document.createElement("i");
        iTitle.textContent = title;
        toPrint.appendChild(iTitle);
        // Author
        const author = book["author"];
        const translator = book["translator"];
        if (translator) {
            toPrint.appendChild(span(" by "));
            toPrint.append(author['name']);
            toPrint.appendChild(span(", translated by "));
            toPrint.append(translator['name']);
        }
        else {
            toPrint.appendChild(span(" by "));
            toPrint.append(author['name']);
        }
        // Tags
        const tags = book["tags"];
        if (tags) {
            if (tags.indexOf("abandoned") != -1) {
                const abandonedText = document.createElement("span");
                abandonedText.style.textDecoration = "line-through";
                while (toPrint.firstChild) {
                    abandonedText.appendChild(toPrint.firstChild);
                }
                toPrint.appendChild(abandonedText);
            }
            const sortedTags = tags.sort();
            toPrint.append(" - ");
            const toPrintTags = document.createElement("span");
            toPrintTags.style.display = "inline-block";
            sortedTags.forEach((tag) => {
                const bgColor = tagColorMap.get(tag);
                if (bgColor == null) {
                    return;
                }
                const tagElement = document.createElement("span");
                tagElement.style.background =
                    `hsl(${bgColor}, 100%, var(--tag-lightness, 85%))`;
                tagElement.style.color = "var(--tag-color, #000)";
                tagElement.textContent = tag.toLowerCase();
                tagElement.classList.add("tag");
                if (tag == "abandoned") {
                    tagElement.style.background = "var(--tag-bg-abandoned, #DDDDDD)";
                    tagElement.style.color = "var(--tag-color-abandoned, #888888)";
                }
                toPrintTags.appendChild(tagElement);
            });
            toPrint.appendChild(toPrintTags);
        }
        // Append Book String
        bookList.appendChild(toPrint);
    });
    section.appendChild(bookList);
}
/**
   Pulls concert data out of my stuff object, sorts it, and inserts
   it into the DOM nicely
*/
function writeConcertsSection() {
    const section = document.querySelector("#ticket_stubs_container");
    if (!section) {
        return;
    }
    const concertList = document.createElement("ul");
    section.appendChild(concertList);
    const sortedConcerts = concerts.sort((lhs, rhs) => rhs["start_date"] - lhs["start_date"]);
    sortedConcerts.forEach((concert) => {
        // Show title
        const concertInfo = document.createElement("li");
        const showTitle = document.createElement("span");
        showTitle.classList.add("concert_title");
        if (concert["title"]) {
            const title = document.createElement("span");
            title.style.color = "red";
            title.textContent = concert["title"];
            showTitle.appendChild(title);
            showTitle.append(": ");
        }
        showTitle.append(concert["artists"].join(", "));
        // Show Meta
        const dateStr = concert["start_date"].toString();
        const date = new Date();
        date.setFullYear(parseInt(dateStr.substring(0, 4), 10), parseInt(dateStr.substring(4, 6), 10) - 1, parseInt(dateStr.substring(6, 8), 10));
        const showMeta = document.createElement("span");
        showMeta.classList.add("concert_meta");
        const dateElement = document.createElement("span");
        dateElement.classList.add("date");
        dateElement.textContent = date.toDateString();
        showMeta.append(" @ ");
        showMeta.append(concert["venue"]);
        showMeta.append(" on ");
        showMeta.appendChild(dateElement);
        concertInfo.appendChild(showTitle);
        concertInfo.appendChild(showMeta);
        concertList.appendChild(concertInfo);
    });
}
/**
   Limits sub containers so they only show N items, and then adds links for
   expanding and collapsing the > N remaining items.
*/
function limitSubContainers() {
    const ITEM_LIMIT = 2;
    document.querySelectorAll(".sub_container.collapsible > ul").forEach((list) => {
        if (list.children.length <= ITEM_LIMIT) {
            return;
        }
        const hiddenItems = Array.from(list.children)
            .filter((item) => item instanceof HTMLElement)
            .slice(ITEM_LIMIT);
        hiddenItems.forEach((item) => {
            hide(item);
            item.remove();
        });
        const expand = document.createElement("a");
        expand.tabIndex = 0;
        expand.title = `Show remaining ${hiddenItems.length}  items.`;
        expand.classList.add("expand_button");
        expand.textContent = "(show more)";
        const collapse = document.createElement("a");
        collapse.tabIndex = 0;
        collapse.classList.add("collapse_button");
        collapse.textContent = "(show less of the above)";
        hide(collapse);
        const parent = list.parentElement;
        if (!parent) {
            return;
        }
        parent.appendChild(expand);
        parent.appendChild(collapse);
        onActivate(expand, () => {
            hiddenItems.forEach((item) => {
                list.appendChild(item);
                show(item);
            });
            hide(expand);
            show(collapse);
            parent.classList.toggle("expanded");
        });
        onActivate(collapse, () => {
            hiddenItems.forEach((item) => {
                hide(item);
                item.remove();
            });
            hide(collapse);
            show(expand);
            const header = Array.from(parent.children)
                .find((child) => child instanceof HTMLElement && child.tagName === "H1");
            if (header) {
                window.scrollTo(0, header.getBoundingClientRect().top + window.scrollY - 50);
            }
            parent.classList.toggle("expanded");
        });
    });
}
function colorResumeSubcategoryTags() {
    const elements = Array.from(document.querySelectorAll("#resume .sub_category_tags > li"));
    if (!elements.length) {
        return;
    }
    // Populate Color Map
    const tags = new Set();
    elements.forEach((element) => {
        tags.add(element.textContent || "");
    });
    const tagColorMap = createColorMap(tags);
    // Color Tags
    elements.forEach((element) => {
        const tag = element.textContent || "";
        const hue = tagColorMap.get(tag);
        if (hue == null) {
            return;
        }
        element.style.background = "hsl(" + hue + ", 100%, var(--tag-lightness, 80%))";
    });
}
function isSearchEngineCrawler() {
    const ua = navigator.userAgent || "";
    return /(bot|crawler|spider|slurp|bingpreview|duckduckbot|googlebot|bingbot|yandex|baiduspider|sogou|exabot|facebot|ia_archiver)/i.test(ua);
}
function writeAboutControls() {
    const briefAbout = document.querySelector("#brief_about");
    if (!briefAbout) {
        return;
    }
    const expandButton = document.createElement("span");
    expandButton.append(".. ");
    const link = document.createElement("a");
    link.tabIndex = 0;
    link.style.cursor = "pointer";
    link.style.fontStyle = "italic";
    link.style.textDecoration = "underline";
    link.textContent = " continued.";
    expandButton.appendChild(link);
    onActivate(expandButton, () => {
        const moreAbout = document.querySelector("#more_about");
        if (moreAbout) {
            toggleDisplay(moreAbout);
        }
        expandButton.remove();
    });
    briefAbout.appendChild(expandButton);
}
function jumbleTheJunk() {
    const drawer = document.querySelector("#junk_drawer_container > ul");
    if (!drawer) {
        return;
    }
    Array.from(drawer.children)
        .sort(() => Math.round(Math.random()) - 0.5)
        .forEach((element) => drawer.appendChild(element));
}
function initializePage() {
    writeContactSection();
    writeBooksSection();
    writeConcertsSection();
    writeAboutControls();
    jumbleTheJunk();
    limitSubContainers();
    colorResumeSubcategoryTags();
    if (document.body) {
        show(document.body);
    }
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePage);
}
else {
    initializePage();
}
