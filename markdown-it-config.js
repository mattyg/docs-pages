const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container");
const markdownItAnchor = require("markdown-it-anchor");

const admonitionRegex = {
  "tip": /^tip\s+(.*)$/,
  "note": /^note\s+(.*)$/,
  "info": /^info\s+(.*)$/,
  "learn": /^learn\s+(.*)$/,
};

const renderAdmonition = (name, tokens, idx) => {
  var titleMatcher = tokens[idx].info.trim().match(admonitionRegex[name]);
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  const title = titleMatcher ? titleMatcher[1] : (nameCapitalized);

  if(tokens[idx].nesting === 1) {
    const titleTag = title ? `<p class='admonition-title'>${ title }</p>` : '';
    return `<div class="admonition ${name}">${titleTag}` + '\n\n';
  } else {
    return '\n</div>\n';
  }
};

/**
 * Wires up a generic markdownItContainer render function for a specified admonition.
 * @param {string} admonitionName The "tag" of the admonition to be rendered
 * @returns render function for the admonition type that works with markdownItContainer
 */
function composeGenericRenderFunc(admonitionName) {
  return function(tokens, idx) { return renderAdmonition(admonitionName, tokens, idx); }
}

/**
 * Configures Markdown-it lib plugins etc. Meant to be called from .eleventy.js 
 * @param {*} eleventyConfig 
 */
module.exports = function(eleventyConfig) {
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAttrs);
    mdLib.use(markdownItAnchor, { tabIndex: false });
    mdLib.use(markdownItContainer, "coreconcepts-intro");
    mdLib.use(markdownItContainer, "coreconcepts-orientation");
    mdLib.use(markdownItContainer, "coreconcepts-storysequence");
    mdLib.use(markdownItContainer, "h-author");
    
    mdLib.use(markdownItContainer, "tip", { marker: "!", render: composeGenericRenderFunc("tip") });
    mdLib.use(markdownItContainer, "note", { marker: "!", render: composeGenericRenderFunc("note") });
    mdLib.use(markdownItContainer, "info", { marker: "!", render: composeGenericRenderFunc("info") });
    mdLib.use(markdownItContainer, "learn", { marker: "!", render: composeGenericRenderFunc("learn") });
  });
 
}