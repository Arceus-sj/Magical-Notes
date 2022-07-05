const addBtn = document.querySelector('#add');
const clearBtn = document.querySelector('#clear');
const showNotes = document.querySelector('.show-notes');


// adding event
addBtn.addEventListener('click', function () {

  const textNote = document.querySelector('#notes').value;

  if(textNote === "") {
    alert('Empty text ...');
  }
  else {
    let note = document.createElement('p');
    note.innerHTML = textNote;
    showNotes.appendChild(note);
  }

});

// clear event
clearBtn.addEventListener('click', function handleclick() {
  let textNote = document.querySelector('#notes');
  textNote.value = '';
});