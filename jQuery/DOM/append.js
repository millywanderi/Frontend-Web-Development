/*
Anchor <a> element is created with Append items text
Javascript function AppendItemsToList() is triggered when you click the link.
The href prevents the browser from opening new page when the link is created.
*/
<a href="javascript:void(0);" onclick="AppendItemsToList();">Append items</a>
<ol id="oldTestList2"></ol> // defines empty ol with id named olTestList2.

<script type="text/javascript">
function AppendItemsToList()
{
	var item1 = $("<li></li>").text("Item 1"); // creates a new list item using jQuery and set it to text content Item 1
	var item2 = "<li>Item 2</li>"; // creates a new list item as a HTML string with the text Item 2
	var item3 = document.createElement("li"); // creates third item using plain js
	item3.innerHTML = "Item 3"; // sets the text content of the third item to Item 3

	$("#olTestList2").append(item1, item2, item3); // uses jQuery to append all te items 
}
</script>
