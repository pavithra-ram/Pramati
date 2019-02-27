<!DOCTYPE html>
<html>
<head>
<style>
*
{
 box-sizing:border-box;
}
.header,.footer
{
   background-color:gray;
   color:white;
   padding:15px;
}
.column
{
 float:left;
 padding:15px;
}
.clearfix::after
{
 content:"";
 clear:both;
 display:table;
}
.content
{
width:75%;
}
.menu
{
width:25%;
}
.menu ul
{
 list-style-type:none;
 margin:0;
 padding:0;
}
.menu li
{
 padding:8px;
 margin-bottom:8px;
 background-color:lightblue;
 color:white;
}
.menu li:hover
{
 background-color:darkblue;
}

</style>
</head>
<body>
<div class="header">
<h1>About me</h1>
</div>
<div class="clearfix">
<div class="column menu">
<ul>
 <li>India</li>
 <li>Tamil nadu</li>
 <li>Karur</li>
 <li>Namakkal</li>
 <li>Coimbatore</li>
 <li>Chennai</li>
</ul>
</div>

<div class="column content">
<p>
What Does Name <span style="color:darkblue">"Pavithra"</span> Mean?
        You have a power of expression, either in speaking or writing. You are in favor for studying and research. You are clever, clear-sighted and intellectual. You don't like to let others know your true feelings. You might be atheistic or agnostic.You are bold, independent, inquisitive and interested in research. You know what you want and why you want it.

      

</p>
</div>
</div>
<div class="footer">
<p>End</p>
</div>
</body>
</html>

