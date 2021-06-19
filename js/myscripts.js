// get html elements
const fromDateField = document.getElementById("from-date");
const toDateField = document.getElementById("to-date");

// validate the fromDate field
function validateFromDate() {
  const fromDate = new Date(fromDateField.value);
  const toDate = new Date(toDateField.value);

  // only validate if the toDate has ben set already
  if (toDate.getTime()) {
    toDateField.setCustomValidity("");
    if (toDate.getTime() >= fromDate.getTime()) {
      fromDateField.setCustomValidity("");
    } else {
      fromDateField.setCustomValidity(
        "Start date must be smaller or equal to end date."
      );
    }
  }
}

// validate toDate field
function validateToDate() {
  const fromDate = new Date(fromDateField.value);
  const toDate = new Date(toDateField.value);

  // only validate if fromDate has ben set already
  if (fromDate.getTime()) {
    fromDateField.setCustomValidity("");
    if (toDate.getTime() >= fromDate.getTime()) {
      toDateField.setCustomValidity("");
    } else {
      toDateField.setCustomValidity(
        "End date must be greater or equal to start date."
      );
    }
  }
}

window.onload = function () {
  document.getElementById("to-date").oninput = validateToDate;
  document.getElementById("from-date").oninput = validateFromDate;
};
