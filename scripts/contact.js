function validateForm() {
    // Get form fields
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get error elements
    const firstnameError = document.getElementById('firstname-error');
    const lastnameError = document.getElementById('lastname-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const serviceError = document.getElementById('service-error');
    const messageError = document.getElementById('message-error');

    // Clear previous errors
    let isValid = true;
    firstnameError.style.display = "none";
    lastnameError.style.display = "none";
    emailError.style.display = "none";
    phoneError.style.display = "none";
    serviceError.style.display = "none";
    messageError.style.display = "none";

    // Validate fields
    if (!firstname) {
        firstnameError.style.display = "block";
        isValid = false;
    }
    if (!lastname) {
        lastnameError.style.display = "block";
        isValid = false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    }
    if (!phone) {
        phoneError.style.display = "block";
        isValid = false;
    }
    if (!service) {
        serviceError.style.display = "block";
        isValid = false;
    }
    if (!message) {
        messageError.style.display = "block";
        isValid = false;
    }

    // Show success message if valid
    if (isValid) {
        alert('Thank you! Your message has been sent successfully.');
    }
}


