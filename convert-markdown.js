const marked = require('marked');

const renderer = new marked.Renderer();

renderer.codespan = (code) => {
	return `<code inline="true">${code}</code>`
};

renderer.code = (code, language, escaped) => {
	return `<code lang=${language}>${code}</code>`
};

renderer.br = () => {
	return `<br class=''>`;
};

marked.setOptions({
	renderer: new marked.Renderer(),
	breaks: true,
	gfm: true,
	// pedantic: false,
	// tables: true,
	// sanitize: false,
	// smartLists: true,
	// smartypants: false,
	// xhtml: false,
});

console.log("testing conversion");

const md = `
## Hello - This is an H2 tag
\r\n

A blank line should be above this.

This is \`some inline code \`. There should not be a break.

Below is a code block that should be nicely formatted as JavaScript

\`\`\`javascript
var x = 3;
console.log(x);
\`\`\`

__That is all__
`;

// const tokens = marked.lexer(md);
const html = marked(md);

console.log("--------HTML--------");
console.log(marked("test1\n&nbsp;\n&nbsp;\n&nbsp;test2"));
//console.log(html);
console.log("--------------------\n");

console.log("--------TOKENS--------\n");
// console.log(tokens);
console.log("--------------------\n");