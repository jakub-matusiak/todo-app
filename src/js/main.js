const input = document.querySelector('.todo__input');
const form = document.querySelector('.todo__form');
const todo = document.querySelector('.todo__list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const item = document.createElement('li');
  const checkbox = document.createElement('input');
  const task = document.createElement('p');
  const remove = document.createElement('button');
  
  if (input.value) {
    task.textContent = input.value;
    item.classList.add('todo__item');
    checkbox.classList.add('todo__checkbox');
    checkbox.setAttribute('type', 'checkbox');
    task.classList.add('todo__task');
    remove.classList.add('todo__remove');
    
    item.appendChild(checkbox);
    item.appendChild(task);
    item.appendChild(remove);
    todo.appendChild(item);
    
    input.value = '';
  }

  input.focus();
});

todo.addEventListener('click', (e) => {
  if (e.target.classList.contains('todo__remove')) {
      const item = e.target.parentElement;
      item.parentElement.removeChild(item);
  }
});