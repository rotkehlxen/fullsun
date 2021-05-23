function validateFromDate(){
	const fromDate = new Date(document.getElementById("from-date").value)
	const toDate = new Date(document.getElementById("to-date").value)

	const fromDateField = document.getElementById("from-date")

	if (!toDate.getTime() || (toDate.getTime() >= fromDate.getTime())) {
		 fromDateField.setCustomValidity("");
	}
	else {
		fromDateField.setCustomValidity("Start date must be smaller or equal to end date.")
	}
}

function validateToDate(){
	const fromDate = new Date(document.getElementById("from-date").value)
	const toDate = new Date(document.getElementById("to-date").value)

	const toDateField = document.getElementById("to-date")

	if (!fromDate.getTime() || (toDate.getTime() >= fromDate.getTime())) {
		 toDateField.setCustomValidity("");
	}
	else {
		toDateField.setCustomValidity("End date must be greater or equal to start date.")
	}
}

window.onload = function () {
    document.getElementById("to-date").oninput = validateToDate;
    document.getElementById("from-date").oninput = validateFromDate;
}
