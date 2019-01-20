const fs = require('fs');

const MarkdownIt = require('markdown-it');
const mdToc = require('markdown-it-toc-and-anchor').default;

const escapeHtml = require('markdown-it/lib/common/utils').escapeHtml;
const unescapeAll = require('markdown-it/lib/common/utils').unescapeAll;

console.log("Creating new MarkdownIt instance");
const mdIt = new MarkdownIt({
	html: false,
	breaks: true,
	linkify: true,
}).use(mdToc, {tocFirstLevel: 2, anchorLink: false});

const newInlineCodeRenderer = function(tokens, idx, options, env, self) {
	const token = tokens[idx]

	return `<code inline="true" escaped="true" ${self.renderAttrs(token)}>${escapeHtml(tokens[idx].content)}</code>`;
};

const newBlockCodeRenderer = function(tokens, idx, options, env, slf) {
	const token = tokens[idx];
	console.log(`---\n${tokens}\n---`);

	return  `<code ${slf.renderAttrs(token)} escaped="true">${escapeHtml(tokens[idx].content)}</code>`;
};

const newFenceCodeRenderer = function(tokens, idx, options, env, slf) {
	const token = tokens[idx];
	const info = token.info ? unescapeAll(token.info).trim() : null;
	const langName = info ? info.split(/\s+/g)[0] : null

	const langString = langName ? `lang=${langName}` : '';
	return  `<code ${slf.renderAttrs(token)} escaped="true" ${langString}>${escapeHtml(tokens[idx].content)}</code>`;
};

mdIt.renderer.rules.code_inline = newInlineCodeRenderer;
mdIt.renderer.rules.code_block = newBlockCodeRenderer;
mdIt.renderer.rules.fence = newFenceCodeRenderer;

const cliArgs = process.argv.slice(2);

if (cliArgs.length !== 2) {
	console.error("Must supply exactly two arguments: a file input and file output");
	process.exit(1);
}

const fileIn = cliArgs[0];
const fileOut = cliArgs[1];

console.log(`Reading input from ${fileIn}`);
const markdownText = fs.readFileSync(fileIn).toString();

console.log('Converting to html');
const html = mdIt.render(markdownText);

console.log(`Writing html to ${fileOut}`);
fs.writeFileSync(fileOut, html);
