function addListStyle(htmlString) {
    return htmlString.replace(/<ul>/g, '<ul class="list-disc ml-8">');
}

function getImageSrc(inputString) {
    // Regular expression to match the src attribute value in <img> tags
    const regex = /<img[^>]*src="([^"]+)"/;

    // Find the first match
    const match = inputString.match(regex);

    // If a match is found, extract the first src value
    const srcValue = match ? match[1] : null;

    return srcValue;
}

export { addListStyle, getImageSrc };
