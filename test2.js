const fs = require('fs');

const MarkdownIt = require('markdown-it');

console.log("Creating new MarkdownIt instance");
const mdIt = new MarkdownIt({
	html: false,
	breaks: true,
	linkify: true,
});

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
