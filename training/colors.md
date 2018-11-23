#RGB Colors

RGB color values are **supported in all browsers**.

An RGB color value is specified with: rgb(red, green, blue).

Each parameter (red, green, and blue) defines the intensity of the color as an integer between 0 and 255.

For example, rgb(0, 0, 255) is rendered as blue, because the blue parameter is set to its highest value (255) and the others are set to 0.

<!DOCTYPE html>
<html>
<style>
div {
    background-color: rgb(0, 191, 255);
    color: rgb(255, 255, 255);
    padding: 20px;
}
</style>
<body>

<div>

<h1>London is the capital city of England.</h1>
<p>It is the most populous city in the United Kingdom,
with a metropolitan area of over 13 million inhabitants.</p>

</div> 

<p>Same as color name "Tomato":</p>

<h1 style="background-color:rgb(255, 99, 71);">rgb(255, 99, 71)</h1>
<h1 style="background-color:#ff6347;">#ff6347</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">hsl(9, 100%, 64%)</h1>

<p>Same as color name "Tomato", but 50% transparent:</p>
<h1 style="background-color:rgba(255, 99, 71, 0.5);">rgba(255, 99, 71, 0.5)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">hsla(9, 100%, 64%, 0.5)</h1>

<p>In addition to the predefined color names, colors can be specified using RGB, HEX, HSL, or even transparent colors using RGBA or HSLA color values.</p>
</body>
</html>

