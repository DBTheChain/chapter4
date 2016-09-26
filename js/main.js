var $newUL = $("<ul>");
var $newParagraphElement = $("<p>");

$newParagraphElement.text("this is a paragraph");

$("footer").append($newParagraphElement);

var $listItemOne = $("<li>").text("this is the first list item");
var $listItemTwo = $("<li>").text("this is the second list item");
var $listItemThree = $("<li>").text("this is the third list item");

$newUL.append($listItemOne);
$newUL.append($listItemTwo);

$("main").append($newUL);

var $footerFirstChild = $("<p>").text("Im the first child of the footer!");
$("footer").prepend($footerFirstChild);

$footerFirstChild.append("footer");

$("ul li:first-child").remove();

$newUL.empty();
