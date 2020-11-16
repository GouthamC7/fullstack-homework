// Enter your code here
function submitdata(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let text = document.getElementById("message").value;
  let checkbox = document.getElementById("check");
  let checkboxvalue;
  if (checkbox.checked == true) {
    checkboxvalue = "on";
  } else {
    checkboxvalue = "off";
  }
  console.log("Name : " + name);
  console.log("Email : " + email);
  console.log("Comments : " + text);
  console.log("Newsletter : " + checkboxvalue);
  document.getElementById("form").reset();
}
