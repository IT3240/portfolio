// Function to replace the content and show output area. Called from HTML.
function replaceContent() {

	// declaring the variables
	let myRecipientName;
	let myHostName; // NEW: variable for host name

	// setting the variable to the input field's id named recipient-input's value
	myRecipientName = document.getElementById("recipient-input").value;

	// NEW: read value from host-input field
	myHostName = document.getElementById("host-input").value;

	// logging to devtools console
	console.log('Variable myRecipientName: ' + myRecipientName);

	// NEW: log host name to confirm it was captured
	console.log('Variable myHostName: ' + myHostName);

	// setting the HTML code in the span id recipient-placeholder with the variable
	document.getElementById("recipient-placeholder").innerHTML = myRecipientName;

	// NEW: replace host-placeholder text with host name
	document.getElementById("host-placeholder").innerHTML = myHostName;

	// make output area visible by removing hidden class
	document.getElementById("outputArea").classList.remove("hidden");
}
