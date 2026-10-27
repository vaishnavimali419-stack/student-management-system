const form = document.getElementById("studentForm");
const list = document.getElementById("studentList");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;

  const item = document.createElement("li");
  item.textContent = `Name: ${name}, Roll No: ${roll}`;

  list.appendChild(item);
  form.reset();
});