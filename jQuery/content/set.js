#!/usr/bin/js
// set text(), html(), and val()
<div id="divText"></div>
<div id="divHtml"></div>
<input type="text" id="txtTest" name="txtTest" value="Input field" />

<script type="text/javascript">
$(function()
{
	$("#divText").text("A dynamically set text");
	$("#divHtml").html("<b><i>A dynamically set HTML string</i></b>");
	$("#txtTest").val("A dynamically set value");
});
</script>
