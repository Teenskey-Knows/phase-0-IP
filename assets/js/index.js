function validate() {
  const name1 = getElementById("name1");
  const number = getElementById("number");
  const message = getElementById("message");

  if (name1.value == "" || number.value == "");
  {
    alert("Kindly fill out all the required inputs.");
  }
}
