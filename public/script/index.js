const todosList = [];

// eslint-disable-next-line no-undef
window.onload = async () => {
  // eslint-disable-next-line no-undef
  let todos = await fetch('/api/todo');
  todos = await todos.json();
  console.log(todos);
  // eslint-disable-next-line no-undef
  const t = document.querySelector('.todos');
  for (const todo of todos) {
    todosList.push(
      `
<div class="${todo._id} todo">
  <h1>${todo.title}</h1>
  <h2>${todo.description}</h2>
  <p class="date">${todo.date}</p>
</div>
      `
    );
    t.innerHTML = todosList.join(' ');
  }
};

// eslint-disable-next-line no-unused-vars
const submitTodo = async () => {
  // eslint-disable-next-line no-undef
  const title = document.querySelector('.title').value;
  // eslint-disable-next-line no-undef
  const description = document.querySelector('.description').value;
  const body = {
    title,
    description,
  };
  // eslint-disable-next-line no-undef
  let todo = await fetch('/api/todo', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  todo = await todo.json();
  const todoHtml = `
<div class="${todo._id} todo">
  <h1 class="title">${todo.title}</h1>
  <h2 class="desc">${todo.description}</h2>
  <p class="date">${todo.date}</p>
</div>
`;

  await updateList(todoHtml);
};

const updateList = async code => {
  // eslint-disable-next-line no-undef
  const t = document.querySelector('.todos');
  todosList.push(code);
  t.innerHTML = todosList.join(' ');
};
