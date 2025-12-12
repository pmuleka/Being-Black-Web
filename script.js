// Simple DOM change: update the footer year
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Basic form validation for Contact page
function validateForm(event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Check if fields are empty
    if (!name.value || !email.value || !message.value) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault(); // stops form from submitting
    }

    // Simple secure email validation pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
}
