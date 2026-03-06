const box = document.getElementById('interactive-box');
const keyDisplay = document.getElementById('key-display');
const form = document.getElementById('access-form');
const inputField = document.getElementById('user-input');

box.addEventListener('click', function() {
    this.innerText = "Clicked!";
    this.style.borderColor = "#22c55e";
});

box.addEventListener('mouseover', function() {
    this.classList.add('highlight');
});

box.addEventListener('mouseout', function() {
    this.classList.remove('highlight');
});

window.addEventListener('keydown', function(event) {
    keyDisplay.innerText = `Key Pressed: ${event.key} (Code: ${event.keyCode})`;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`System processing: ${inputField.value}`);
    inputField.value = "";
});