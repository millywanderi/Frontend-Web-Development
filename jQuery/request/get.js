<script type="text/javascript">
$(function ()
{
	$.get("content.html", function(data, textStatus)
	{
		alert("Done, with the following status: " + textStatus + ". Here is the response: " + data);
	});
});
</script>
