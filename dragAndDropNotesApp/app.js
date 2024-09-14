let color = document.getElementById('color');
let createBtn = document.getElementById('createBtn')
let list = document.getElementById('list');

createBtn.onclick = () => {
    let newNote = document.createElement('div');
    newNote.classList.add('note')
    newNote.innerHTML = `
    <span class="close">X</span>
    <textarea placeholder="Write content ..." rows="10" cols="30"></textarea>`;
    newNote.style.borderColor = color.value
    list.appendChild(newNote);
}

document.addEventListener('click',  (event) => {
    if(event.target.classList.contains('close')){
        event.target.parentNode.remove();
    }
});

