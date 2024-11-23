const generatePassword = document.getElementById('generatePassword');
const passwordDisplay = document.getElementById('password');
const lengthInput = document.getElementById('lengthInput');
const includeSpecialInput = document.getElementById('includeSpecialCharacters');

generatePassword.addEventListener('click', randomPasswordGenerator);

function randomPasswordGenerator() {
    const length = parseInt(lengthInput.value);
    const includeSpecial = includeSpecialInput.checked;

    if (length < 8 || length > 20) return alert('La longitud de la contraseña debe ser entre 8 y 20 caracteres');

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = lowercaseChars + uppercaseChars + numbers + (includeSpecial ? specialChars : '');

    let password = Array.from({ length }).map(() => characters[Math.floor(Math.random() * characters.length)]).join('');

    passwordDisplay.textContent = password;
}