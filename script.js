function getFormvalue() {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get the form
  const form = document.getElementById("form1");

  // Get values from input fields
  const firstName = form.fname.value.trim();
  const lastName = form.lname.value.trim();

  // Concatenate and display full name
  alert(`${firstName} ${lastName}`);
}
