import { animateCounter } from "./animateCounter"
import { getBlogPostByTitle, getBlogPosts } from "./contentful"
import { formatURL, formatDate } from "./formatUrl"
import { parseAnswerWithLinks, linkMapping } from "./parseAnswerWithLinks"
import { scrollTo } from "./scrollTo"
import { stringShortner, shortenTitle } from "./stringShortner"

export {
    parseAnswerWithLinks,
    linkMapping,
    stringShortner,
    shortenTitle,
    animateCounter,
    scrollTo,
    formatURL,
    formatDate,
    getBlogPostByTitle,
    getBlogPosts,
    
}