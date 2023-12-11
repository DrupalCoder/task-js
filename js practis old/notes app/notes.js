function saveNote() {
  const noteInput = document.getElementById('noteInput');
  const noteText = noteInput.value.trim();

  if (noteText !== '') {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    displayNotes();
    showStep(2);
  }
}

function displayNotes() {
  const noteList = document.getElementById('noteList');
  noteList.innerHTML = '';

  const notes = JSON.parse(localStorage.getItem('notes')) || [];

  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = note;
    li.innerHTML += `<button onclick="deleteNote(${index})">Delete</button>`;
    noteList.appendChild(li);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}

function showStep(stepNumber) {
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    if (index + 1 === stepNumber) {
      step.style.display = 'block';
    } else {
      step.style.display = 'none';
    }
  });
}

showStep(1);
