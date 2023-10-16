let savedTexts = [];

function changeColor() {
  const inputText = document.getElementById('textInput').value;
  const chosenColor = document.getElementById('colorPicker').value;
  const outputDiv = document.getElementById('output');

  outputDiv.innerHTML = inputText;
  outputDiv.style.color = chosenColor;
}

function saveText() {
  const inputText = document.getElementById('textInput').value;
  const chosenColor = document.getElementById('colorPicker').value;

  savedTexts.push({ text: inputText, color: chosenColor });
  displaySavedTexts();
}

function displaySavedTexts() {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  for (const savedText of savedTexts) {
    const savedTextElement = document.createElement('div');
    savedTextElement.classList.add('savedText');
    savedTextElement.textContent = savedText.text;
    savedTextElement.style.color = savedText.color;
    outputDiv.appendChild(savedTextElement);
  }
}
