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
    checkbox.classList.add(`todo__checkbox--${counter}`);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.dataset.key = counter;
    task.classList.add('todo__task');
    remove.classList.add('todo__remove');
    remove.classList.add(`todo__remove--${counter}`);
    remove.dataset.key = counter;
    
    item.appendChild(checkbox);
    item.appendChild(task);
    item.appendChild(remove);
    list.appendChild(item);
    
    tasks.push({id: counter, task: input.value, done: false});
    
    input.value = '';
    
    if (list.childNodes.length == 1) {
      todo.removeChild(warning);
    }
  }

  input.focus();
});

list.addEventListener('click', (e) => {
  const key = e.target.dataset.key;
  const item = e.target.parentElement;
  const checkbox = document.querySelector(`.todo__checkbox--${key}`);

  if (e.target.classList.contains('todo__checkbox')) {
    const item = e.target.parentElement;
    item.classList.toggle('todo__item--done');
  }
});