function addTask() {
  console.log('Hello');
  console.log(taskInput.value);
  if (taskInput.value === '') {
    return;
  }
  const newLiElement = document.createElement('li');
  const deleteButton = document.createElement('button');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');
  span.innerHTML = taskInput.value;
  checkbox.type = 'checkbox';

  deleteButton.onclick = deleteItem;

  deleteButton.innerHTML = 'Delete';
  newLiElement.append(checkbox);
  newLiElement.append(span);

  newLiElement.append(deleteButton);
  tasks.append(newLiElement);
  taskInput.value = '';

  function deleteItem() {
    const liToDelete = deleteButton.closest('li');
    tasks.removeChild(liToDelete)
  };
}