function addListStyle(htmlString) {
    return htmlString.replace("<ul>", '<ul class="list-disc">');
}

export { addListStyle };
