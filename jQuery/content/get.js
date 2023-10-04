#!/usr/bin/node
// get text(), html(), and val()
<div id="divTest">
	<b>Test</b>
	<input type="text" id="txtTest" name="txtTest" value="Input field" />
</div>

<script type="text/javascript">
$(function()
{
	alert("Text: "  + $("$divTest").text());
	alert("HTML: "  + $("$divTest").html());
	alert("Value: "  + $("$divTest").val());

	alert("Text: " + $("#txtText").text());
	alert("HTML: " + $("#txtText").html());
	alert("Value: " + $("#txtTest").val());
});
</script>
