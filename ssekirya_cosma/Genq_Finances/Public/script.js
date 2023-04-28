function validateForm() {
    let x = document.forms["registration"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }