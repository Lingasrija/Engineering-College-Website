
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const result = document.getElementById("result");

    if (name === "" || email === "" || message === "") {
        result.textContent = "Please fill in all fields.";
        result.style.color = "red";
    } else {
        result.textContent = "Thank you, " + name + "! Your form is validated.";
        result.style.color = "green";

        contactForm.reset();
    }
});
