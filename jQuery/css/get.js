#!/usr/bin/node
// css selector using hasClass(), addClass() and removeClass() methods
<a href="javascript:void(0);" onClick="ToggleClass(this);"> Toggle class</a>

<script type="text/javascript">
function ToggleClass(sender)
{
	if($(sender).hasClass("bold"))
		$(sender).removeClass("bold");
	else
		$(sender).addClass("bold");
}
</script>

/*
The above code tests for the following css selector
.bold {
	font-weight: bold;
}
.blue {
	color: blue;
}
*/
