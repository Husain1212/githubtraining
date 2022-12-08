function submitForm() {

  
    const form = document.forms["Student_Details"];
    const Studentname = form["Studentname"].value;

    if (!Studentname) {
      document.getElementById("Studentnamerror").innerHTML = "Please enter first name.";
      return false;
    }
    if (Studentname.includes("Sajid")) {
      document.getElementById("Studentnamerror").innerHTML =
        "Student Name should not contain Sajid in it.";
      return false;
    }
    if (Studentname.length > 10) {
      document.getElementById("Studentnamerror").innerHTML =
        "Student name length should not be greater than 10";
      return false;
    }
    document.getElementById("Studentnamerror").innerHTML = "";
  
    const fname = form["fname"].value;
    if (!fname) {
      alert("Father name is a mandatory field");
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