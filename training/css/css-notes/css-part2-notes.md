#CSS Overflow

The overflow property specifies whether to clip content or to add scrollbars when the content of an element is too big to fit in a specified area.

##The overflow property has the following values:

**visible**- Default. The overflow is not clipped. It renders outside the element's box
**hidden** - The overflow is clipped, and the rest of the content will be invisible
**scroll** - The overflow is clipped, but a scrollbar is added to see the rest of the content
**auto**   - If overflow is clipped, a scrollbar should be added to see the rest of the content

div {
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll; /* Add vertical scrollbar */
}

#CSS Layout - float and clear

<!DOCTYPE html>
<html>
<head>
<style>
.div1 {
    float: left;
    width: 100px;
    height: 50px;
    margin: 10px;
    border: 3px solid #73AD21;
}

.div2 {
    border: 1px solid red;
}

.div3 {
    float: left;
    width: 100px;
    height: 50px;
    margin: 10px;
    border: 3px solid #73AD21;
}

.div4 {
    border: 1px solid red;
    clear: left;
}
</style>
</head>
<body>

<h2>Without clear</h2>
<div class="div1">div1</div>
<div class="div2">div2 - Notice that div2 is after div1 in the HTML code. However, since div1 floats to the left, the text in div2 flows around div1.</div>
<br><br>

<h2>With clear</h2>
<div class="div3">div3</div>
<div class="div4">div4 - Here, clear: left; moves div4 down below the floating div3. The value "left" clears elements floated to the left. You can also clear "right" and "both".</div>

</body>
</html>


## clearfix :

If an element is taller than the element containing it, and it is floated, it will "overflow" outside of its container:

## inline-block :

We can set width,height,padding.

## center align :

To horizontally center a block element (like <div>), use margin: auto;

## center an Image :

To center an image, set left and right margin to auto and make it into a block element:

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
}
# CSS Opacity / Transparency

The opacity property specifies the opacity/transparency of an element.

The opacity property can take a value from 0.0 - 1.0. The lower value, the more transparent:

img {
    opacity: 0.5;
    filter: alpha(opacity=50); /* For IE8 and earlier */
}

The opacity property is often used together with the :hover selector to change the opacity on mouse-over.

img {
    opacity: 0.5;
    filter: alpha(opacity=50); /* For IE8 and earlier */
}

img:hover {
    opacity: 1.0;
    filter: alpha(opacity=100); /* For IE8 and earlier */
}





