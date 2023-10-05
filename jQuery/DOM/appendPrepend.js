// allows the user to navigate on the onclick cureent browser and create a new appended list
<a href="javascript:void(0);" onclick="$('olTestList1').append('<li>Appended item</li>');">Append</a>

// allows the user to navigate on the onclick cureent browser and create a new prepended list
<a href="javascript:void(0);" onclick="$('olTestList1').prepend('<li>Prepended item</li>');">Prepend</a>

// defines the ordered list with id olTestList1
<ol id="olTestList1">
	<li>Existing item</li>
	<li>Existing item</li>
</ol>
