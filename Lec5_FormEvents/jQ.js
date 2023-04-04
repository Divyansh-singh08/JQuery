$(document).ready(() => {
	//when i focus then background color change
	$("#sEmail,#sClass,#sCountryName").focus(function () {
		$(this).css("background-color", "white", "border", "none");
	});
	//this is just opposite of the focus
	$("#sEmail,#sClass,#sCountryName").blur(function () {
		$(this).css("background-color", "rgb(44, 97, 97)");
	});

	//change event mostly apply on the SelectBox jQ apply
	$("#sCountryName").change(function () {
		$(this).css("background-color", "orange");
	});

	//now if i want to change the value then do like this
	$("#sCountryName").change(function () {
		//val is  the method which take val form here..
		var a = $(this).val();
		$("#test").html(a);
	});
	//this will work with the input box
	//give the effect of the select...
	$("#sEmail,#sClass").select(function () {
		$(this).css("background-color", "pink");
	});

	//this is the form submit the then show the action part
	$("#sformId").submit(function () {
		// $(this).css("background-color", "pink");
		alert("This form is submit..");
	});
});
