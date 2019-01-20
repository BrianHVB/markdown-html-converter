const fs = require('fs');

const MarkdownIt = require('markdown-it');
const MdAnchor = require('markdown-it-anchor');
const MdToc = require('markdown-it-toc-done-right');
const MdToc2 = require('markdown-it-toc-and-anchor').default;

const mdString = `
# This is an H1 heading meant to be used for the {TITLE}

# Table of contents - This should not be an entry in the TOC
@[toc]

# BODY

## Section 1
foo bar

## Section 2
foobar
`;

const mdIt = new MarkdownIt({html: false, breaks: true, linkify: true,})
	.use(MdToc2, {tocFirstLevel: 2, anchorLink: false});

const html = mdIt.render(mdString);
console.log(html);
