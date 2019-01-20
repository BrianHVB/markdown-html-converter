# Do some coding thing
This is a test entry in some fancy markdown.

Logo and Google Link:
[![React Logo][logo]][Google]

## Table of Contents
@[toc]

## Introduction
This is a *test* document for converting markdown to html. Hopefully it will turn into something that let me write blog entries in __markdown__ for both my [Echogy blog] and [Medium]

## Blank lines
Because Markdown uses HTML style whitespace rules, it is more difficult than it should be to get multiple blank lines between paragraphs. The best way seems to be to add `&nbsp;` entries to any blank lines.
**There should be 2 lines between `start` and `end`**
&nbsp;
---START---
&nbsp;
&nbsp;
---END---

## Escaped HTML
Here are some HTML tags entered as text blocks. Depending on your settings they may need to be escaped. The following paragraph should contain text representations of the p, a, img, and div tags.

### Example 1:
A <p> tag is for paragraphs and line spacing, while an <a> tag can be used within an <img>, and <div> tags are for everything:

* A <p> tag:
* An <a> tag with an <img> tag.
* Good ol' catchall: <div>

### Example 2:
On the other hand, html within code should be automatically escaped by the converter. So `<p>This is a paragraph</p>` will never render as a paragraph.

## Code blocks
Two types: inline and block (fences)

### Inline
Code `that is inline will appear in monospaced font`. It won't cause any line breaks and should look nice.

### Fences
Code fences are blocks of code with an optional langague type. Here's some JavaScript

```javascript
const x = 5;
const animal = 'dog';
let templateString = `There are ${x} dog${x >= 1 ? 's' : ''}`;

for (let i = 1; i < 14; i++) {
	let long_str = `
	  This is a multi-line string.
	  It tests that the line numbers are working
	  And that backticks in markdown are properly escaping
	`
	
	if (x < i) {
		continue;
	}
	
	let xx = x + 3;
}
console.log(templateString);
```

#  
## Tables
| Column 1 | Column 2 | Column 3 |
|----------|:--------:|---------:|
| This is the first test |no proper spacing | wtf? |
| Row 2 | is short | yup |

## Misc
This will help test headings:

### Comments:
(you should not see anything here)

[//]: # (Comments must have a blank line above them. If you can read this something is WRONG)

### Sub-Headings
Down the rabbit hole
#### Sub-header A
Something piffy
### Sub-header B
How far can we go?
#### Sub 4A
This is level 4-A
#### Sub 4B
This is level 4-B
##### Sub 5A
Tired of finding thigs to write
##### Sub 5B
No way I'm going to 6

### Back to 3
Upwards!
## Then to 2
Almost there
# Finally at the top

[//]: # (This is how you can insert non-rendering comments. Below is a list of links)

[Echogy blog]: <https://blog.echogy.net>
[Medium]: <https://www.medium.com>
[Google]: <httos://google.com>
[Logo]: <https://blog.echogy.net/wp-content/uploads/2018/03/1200px-React-icon.svg1_-440x440.png>


The end
&nbsp;
&nbsp;