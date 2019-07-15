const input = document.querySelector('.todo__input');
const form = document.querySelector('.todo__form');
const list = document.querySelector('.todo__list');
const todo = document.querySelector('.todo');
const warning = document.querySelector('.todo__warning');
const tasks = [];
let counter = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const item = document.createElement('li');
  const checkbox = document.createElement('input');
  const task = document.createElement('p');
  const remove = document.createElement('button');
  
  if (input.value) {
    counter++;

    task.textContent = input.value;
    item.classList.add('todo__item');
    checkbox.classList.add('todo__checkbox');
    checkbox.setAttribute('type', 'checkbox');
    task.classList.add('todo__task');
    remove.classList.add('todo__remove');
    
    item.appendChild(checkbox);
    item.appendChild(task);
    item.appendChild(remove);
    list.appendChild(item);
    
    input.value = '';
    
    if (list.childNodes.length == 1) {
      todo.removeChild(warning);
    }
  }

  input.focus();
});

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('todo__remove')) {
      const item = e.target.parentElement;
      item.parentElement.removeChild(item);
      counter--;
      
      if (list.childNodes.length == 0) {
        todo.appendChild(warning);
      }
  }

  if (e.target.classList.contains('todo__checkbox')) {
    const item = e.target.parentElement;
    item.classList.toggle('todo__item--done');
  }
});