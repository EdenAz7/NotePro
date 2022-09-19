const taskForm = document.querySelector('#form');
const bodyTask = document.querySelector('#body');

taskForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    const header = document.querySelector('#header').value;
    const task = document.querySelector('#task').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;


    let addNote = [];
    addNote.push(header, task, date, time);
    console.log(addNote);

    let noteJson = JSON.stringify(addNote);
    console.log(noteJson);

    bodyTask.innerHTML += `
    <ul class="fadein">
    <li>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle close" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    </li>
        <li>
        <strong>${header}</strong>
        </li>
       <li> <div class="text">${task}</div>
        <li>${date}</li>
        <li>${time}</li>
    </ul>
    `

}
bodyTask.addEventListener('click', onDelete);
function onDelete(e) {
    if (!e.target.classList.contains('close')) {
        return;
    };

    const delBtn = e.target;
    delBtn.closest('ul').remove();
}


