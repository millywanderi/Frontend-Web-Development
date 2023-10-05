<script type="text/javascript">
$(function ()
{
	$.post("test_post.php",
	{
		name: "Kylie Kinsley",
		age: "8"
	},
	function(data, textStatus)
	{
		alert("Response from the server: " + data);
	});
});
</script>
