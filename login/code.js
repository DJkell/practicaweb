const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  console.log("hola");
  e.preventDefault();
  submit.style.color = "red";
});
