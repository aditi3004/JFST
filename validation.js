const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const birthdate = document.getElementById('birthdate');
const gender = document.getElementById('gender');

form.addEventListener('submit', function(event) {
    let isValid = true;

    if (username.value.trim() === '') {
        isValid = false;
        alert('Please enter a username.');
    }

    if (!isValidEmail(email.value)) {
        isValid = false;
        alert('Please enter a valid email.');
    }

    if (!isValidPhoneNumber(phone.value)) {
        isValid = false;
        alert('Please enter a valid phone number.');
    }

    if (!isValidBirthdate(birthdate.value)) {
        isValid = false;
        alert('Please enter a valid birthdate.');
    }

    if (gender.value === '') {
        isValid = false;
        alert('Please select a gender.');
    }

    if (isValid) {
        alert('Form submitted successfully!');
    } else {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
}

function isValidBirthdate(birthdate) {
    const inputDate = new Date(birthdate);
    const currentDate = new Date();
    return (inputDate < currentDate);
}

