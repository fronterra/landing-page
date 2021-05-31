

/**
 * Convert a template string into HTML DOM nodes
 * @param {String} string the template string
 * @return {Node} the template node
 * 
 * See https://gomakethings.com/converting-a-string-into-markup-with-vanilla-js/ for reference
 */
export const stringToHTML = (string) => {
    let parser = new DOMParser();
    let document = parser.parseFromString(string, 'text/html');
    return document.body;
};