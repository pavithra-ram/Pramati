# CSS Counters

CSS counters are "variables" maintained by CSS whose values can be incremented by CSS rules (to track how many times they are used). Counters let you adjust the appearance of content based on its placement in the document.

## Automatic Numbering With Counters

CSS counters are like "variables". The variable values can be incremented by CSS rules (which will track how many times they are used).

To work with CSS counters we will use the following properties:

**counter-reset** - Creates or resets a counter
**counter-increment** - Increments a counter value
**content** - Inserts generated content
**counter() or counters() function** - Adds the value of a counter to an element
To use a CSS counter, it must first be created with **counter-reset**.

The following example creates a counter for the page (in the body selector), then increments the counter value for each <h2> element and adds "Section <value of the counter>:" to the beginning of each <h2> element:

<!DOCTYPE html>
<html>
<head>
<style>
body {
    counter-reset: section;
}

h2::before {
    counter-increment: section;
    content: "Section " counter(section) ": ";
}
</style>
</head>
<body>

<h1>Using CSS Counters:</h1>
<h2>HTML Tutorial</h2>
<h2>CSS Tutorial</h2>
<h2>JavaScript Tutorial</h2>

<p><b>Note:</b> IE8 supports these properties only if a !DOCTYPE is specified.</p>

</body>
</html>


