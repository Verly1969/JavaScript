const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
const date = document.getElementById("dateOfBirth");
const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
    text.textContent = `Bonjour ${lastname.value} ${firstname.value}, vous êtes né le ${date.value}`;
})