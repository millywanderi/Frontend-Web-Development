<a href="javascript:void(0);" onclick="PrependItemsToList();">Prepend items</a>
<ol id="olTestList3"></ol>

<script type="text/javascript">
function PrependItemsToList()
{
	$("#olTestList3").prepend($("<li></li>").text("prepend() item"));
	$("<li></li>").text("prependTo() item").prependTo("#olTestList3");
}
</script>
