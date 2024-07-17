const inputBox = document.getElementById('input-box');
const listContainer = document.querySelector('.container-list');
const imageUrl = 'assets/close-icon.png'; 

document.querySelector('button').onclick = addTask

function addTask(){
    if(inputBox.value === ''){
        alert('Add a task to proceed')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span)
    }
    inputBox.value = ''; 
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
}, false);