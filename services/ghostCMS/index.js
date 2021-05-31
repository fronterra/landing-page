import GhostContentAPI from "@tryghost/content-api";

export default (function ghostHandler () {
    // create ghost content api client instance
    const api = new GhostContentAPI({
        url: process.env.GHOST_URL,
        key: process.env.GHOST_API_KEY,
        version: process.env.GHOST_API_VERSION
    })


    return {
        /** */
        async getPosts() {
            try {
                // returns an array of post objects
                return (await api.posts.browse({ include: "authors,tags" }));

            } catch (err) {
                // handle error
                throw err;
            }
        },
        /** */
        async getPostBySlug(slug) {
            try {
                return (await api.posts.read({ slug }));
            } catch (err) {
                throw err;
            }
        },
    }
})();