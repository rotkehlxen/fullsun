function printSuncalStatus(){
	// deprecated
	const latitude = document.getElementById("latitude").value
	const longitude = document.getElementById("longitude").value
	const fromDate = document.getElementById("from-date").value
	const toDate = document.getElementById("to-date").value

	const message = `Creating calendar events for location 
	${latitude}°, ${longitude}° from ${fromDate} to ${toDate}.`

	document.getElementById("statusMessage").textContent = message
}