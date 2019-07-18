const input = document.querySelector('.todo__input');
const form = document.querySelector('.todo__form');
const list = document.querySelector('.todo__list');
const todo = document.querySelector('.todo');
const warning = document.querySelector('.todo__warning');
let tasks = [];
let counter = localStorage.getItem('counter');
counter = Number(counter);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (input.value) {
    tasks.push({id: counter, task: input.value, done: false});
    list.textContent = '';
    render();
    store();
    input.value = '';
    
    if (list.childNodes.length == 1) {
      todo.removeChild(warning);
    }
  }

  input.focus();
});

list.addEventListener('click', (e) => {
  const key = e.target.dataset.key;
  const checkbox = document.querySelector(`.todo__checkbox--${key}`);

  if (e.target.classList.contains(`todo__remove--${key}`)) {
    tasks.splice(key-1, 1);
    list.textContent = '';
    render();
    store();

    if (list.childNodes.length == 0) {
      todo.appendChild(warning);
      localStorage.clear();
    }
    counter--;
  }
  
  if (e.target.classList.contains(`todo__checkbox--${key}`)) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == key) {
        if (checkbox.checked) {
          tasks[i].done = true;
        } else {
          tasks[i].done = false;
        }
      }
    }
    list.textContent = '';
    render();
    store();
  }
});

const render = () => {
  counter = 1;
  
  for (let i = 0; i < tasks.length; i++) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');
    const task = document.createElement('p');
    const remove = document.createElement('button');
    
    tasks[i].id = counter;
    task.textContent = tasks[i].task;
    item.classList.add('todo__item');
    checkbox.classList.add('todo__checkbox');
    checkbox.classList.add(`todo__checkbox--${counter}`);
    checkbox.setAttribute('type', 'checkbox');
    if (tasks[i].done == true) {
      item.classList.toggle('todo__item--done');
      remove.classList.toggle('todo__remove--done');
      checkbox.checked = 'checked';
    }
    checkbox.dataset.key = counter;
    task.classList.add('todo__task');
    remove.classList.add('todo__remove');
    remove.classList.add(`todo__remove--${counter}`);
    remove.dataset.key = counter;
    
    item.appendChild(checkbox);
    item.appendChild(task);
    item.appendChild(remove);
    list.appendChild(item);
    
    counter++;
  }
}

const store = () => {
  const jsonTasks = JSON.stringify(tasks);
  localStorage.setItem('tasks', jsonTasks);
  localStorage.setItem('counter', counter);
}

if (counter > 1) {
  const tasksStringify = localStorage.getItem('tasks');
  const newTasks = JSON.parse(tasksStringify);
  tasks = newTasks;
  todo.removeChild(warning);
  render();
}