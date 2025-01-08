const addButton = document.getElementById('addButton');
const randomButton = document.getElementById('randomButton');
const textInput = document.getElementById('textInput');
const output = document.getElementById('output');

let texts = [];

// Add text to the list
addButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
        texts.push(text);
        textInput.value = '';
        alert('Text added successfully!');
    } else {
        alert('Please enter some text.');
    }
});

// Display a random text from the list
randomButton.addEventListener('click', () => {
    if (texts.length === 0) {
        output.textContent = 'No texts available. Please add some first.';
    } else {
        const randomIndex = Math.floor(Math.random() * texts.length);
        output.textContent = texts[randomIndex];
    }
});
