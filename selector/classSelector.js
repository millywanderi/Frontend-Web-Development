#!/usr/bin/node
// matches elements with a specific class denoted with . followed by class
<ul>
	<li class="bold">Test 1</li>
	<li>Test 2</li>
	<li class="bold"> Test 3</li>
</ul>
<script type="text/javascript">
$(function()
{
	$(".bold").css("font-weight", "bold");
});
</script>
