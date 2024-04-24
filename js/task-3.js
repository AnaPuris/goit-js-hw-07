'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
    const cleanValue = event.currentTarget.value.trim();
    nameOutput.textContent = cleanValue === '' ? 'Anonymous' : cleanValue;
});

nameInput.addEventListener('focus', event => {
    event.currentTarget.value = '';
});