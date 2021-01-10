// eslint-disable-next-line no-unused-vars
const clickMe = async () => {
  const body = {
    title: 'Hello people',
    description: 'I hate you',
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

  // eslint-disable-next-line no-undef
  document.querySelector(
    '.bad'
  ).innerHTML = `<h1>${todo.title}</h1> <h2>${todo.description}</h2> <p>${todo._id} ${todo.date}</p>`;
  console.log(todo);
};
