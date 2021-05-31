import cheerio from 'cheerio'; // module to handle DOM parsing from nodeJS runtime

/**
 * Convert a template string into HTML DOM nodes
 * @param {String} string the template string
 * @return {Node} the template node
 * 
 */
export const stringToHTML = (string) => {
    // load string into cheerio
    const $ = cheerio.load(string);

    // return rendered HTML document
    return $.html();
};