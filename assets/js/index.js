function validate() {
  const name1 = document.getElementById("name1");
  const number = document.getElementById("number");
  const message = document.getElementById("message");

  if (name1.value.trim() == "" || number.value.trim() == "" || message.value.trim() == "")
  {
    alert("Kindly fill out all the required inputs.");
    return false;
  }else{
    alert("Your inquiry has been successfully submitted.We will reply as soon as we are able. Thank you.")
    true;
    
  }
}
