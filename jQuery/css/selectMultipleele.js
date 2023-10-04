#!/usr/bin/node
// select multiple css elements
<div id="divTestArea1">
	<span>Test 1</span><br />
	<div>Test 2</div>
	<b>Test 3</b><br />
</div>
<script type="text/javascript">
$(function()
{
	$("#divTestArea1 span, #divTestArea1 b").addClass("blue");
	$("#divTestArea1 div").addClass("bold blue");
});
</script>
