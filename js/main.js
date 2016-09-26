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

$("footer p").fadeOut(2000, function(){
  $("footer p").remove();
});

var main = function () {    "use strict";
    // create and hide our content as a div
    var $content = $("<div>Hello World!</div>").hide();
    var $moreContent = $("<div>More Content</div>").hide();
    // append the content to the body element
    $("body").append($content);
    // slide the content down for 2 seconds
    $content.slideDown(2000, function(){
      $("body").append($moreContent);

        $moreContent.fadeIn();
    });
  };

$(document).ready(main);
