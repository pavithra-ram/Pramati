# Float boxes side by side:

<!DOCTYPE html>
<html>
<head>
<style>
* {
    box-sizing: border-box;
}

.box {
    float: left;
    width: 33.33%;/* three boxes (use 25% for four, and 50% for two, etc) */
    padding: 50px;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
</style>
</head>
<body>

<h2>Grid of Boxes</h2>
<p>Float boxes side by side:</p>

<div class="clearfix">
  <div class="box" style="background-color:#bbb">
    <p>Some text inside the box.</p>
  </div>
  <div class="box" style="background-color:#ccc">
    <p>Some text inside the box.</p>
  </div>
  <div class="box" style="background-color:#ddd">
    <p>Some text inside the box.</p>
  </div>
</div>

<p>Note that we also use the clearfix hack to take care of the layout flow, and that add the box-sizing property to make sure that the box doesn't break due to extra padding. Try to remove this code to see the effect.</p>

</body>
</html>

# side by side images :

<!DOCTYPE html>
<html>
<head>
<style>
* {
    box-sizing: border-box;
}

.img-container {
    float: left;
    width: 33.33%;
    padding: 5px;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
</style>
</head>
<body>

<h2>Images Side by Side</h2>
<p>Float images side by side:</p>

<div class="clearfix">
  <div class="img-container">
    <img src="img_5terre.jpg" alt="Italy" style="width:100%">
  </div>
  <div class="img-container">
    <img src="img_forest.jpg" alt="Forest" style="width:100%">
  </div>
  <div class="img-container">
    <img src="img_mountains.jpg" alt="Mountains" style="width:100%">
  </div>
</div>

<p>Note that we also use the clearfix hack to take care of the layout flow, and that add the box-sizing property to make sure that the image container doesn't break due to extra padding. Try to remove this code to see the effect.</p>

</body>
</html>

