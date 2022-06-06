function validate() {
  const name1 = document.getElementById("name1");
  const number = document.getElementById("number");
  const message = document.getElementById("message");

  if (name1.value == "" || number.value == "");
  {
    alert("Kindly fill out all the required inputs.");
  }
}
