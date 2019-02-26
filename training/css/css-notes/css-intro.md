# CSS Introduction

##What is CSS?
	- CSS stands for **Cascading Style Sheets**
	- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
	- CSS saves a lot of work. It can **control the layout of multiple web pages all at once**
	- External stylesheets are stored in CSS files

##CSS Solved a Big Problem

	-HTML was NEVER intended to contain tags for formatting a web page!

HTML was created to describe the content of a web page, like:

	<h1>This is a heading</h1>

	<p>This is a paragraph.</p>

	-When tags like <font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.

	-To solve this problem, the World Wide Web Consortium (W3C) created CSS.

	-CSS removed the style formatting from the HTML page!

##CSS Saves a Lot of Work!

	- The style definitions are normally saved in external .css files.

	- With an external stylesheet file, you can change the look of an entire website by changing just one file!

##CSS Syntax

A CSS rule-set consists of a selector and a declaration block:

###CSS selector

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.

In the following example all <p> elements will be center-aligned, with a red text color:

p {
    color: red;
    text-align: center;
}



