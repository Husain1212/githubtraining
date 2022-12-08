function submitForm() {
    const form = document.forms["myForm"];
    const fname = form["fname"].value;
    if (!fname) {
      document.getElementById("fnamerror").innerHTML = "Please enter first name.";
      return false;
    }
    if (fname.includes("Sajid")) {
      document.getElementById("fnamerror").innerHTML =
        "First Name should not contain Sajid in it.";
      return false;
    }
    if (fname.length > 10) {
      document.getElementById("fnamerror").innerHTML =
        "First name length should not be greater than 10";
      return false;
    }
    document.getElementById("fnamerror").innerHTML = "";
  
    const lname = form["lname"].value;
    if (!lname) {
      alert("Last name is a mandatory field");
      return false;
    }
  
    const mobile = form["mobile"].value.toString();
    if (!mobile) {
      alert("Mobile is a mandatory field");
      return false;
    }
    if (mobile.length !== 10) {
      alert("Mobile number digits should be equal to 10");
      return false;
    }
    return true;
  }