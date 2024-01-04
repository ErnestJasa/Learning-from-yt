const todoList = [];
renderTodoList();

function renderTodoList() {
  let todoHTMLList = "";

  todoList.forEach((todo, index) => {
    const html = `
    <div>
      ${todo.name}
    </div> 
    <div>
      ${todo.dueDate}
    </div>
    <button
    class="delete-todo-button"
     onclick="
      todoList.splice(${index}, 1);
      renderTodoList();
    ">Delete</button>
     `;
    todoHTMLList += html;
  });

  const todoListElement = document.querySelector(".js-todo-list");

  todoListElement.innerHTML = todoHTMLList;
}

// let todoIndex = 0;
function addTodo() {
  const todoInputElement = document.querySelector(".js-todo-input");
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  const todo = todoInputElement.value;
  todoList.push({
    name: todo,
    dueDate: dueDate,
  });
  todoInputElement.value = "";
  //  my way, not working. somewhere index bugs out
  //   if (todo !== "") {
  //     const todoListElement = document.querySelector(".js-todo-list");
  //     let newTodoPElement = document.createElement("p");
  //     let newTodoButtonElement = document.createElement("button");
  //     newTodoPElement.innerHTML = todo + " ";
  //     newTodoPElement.id = `p-${todoIndex}`;
  //     newTodoButtonElement.innerHTML = " Delete";
  //     newTodoButtonElement.id = todoIndex;
  //     newTodoButtonElement.onclick = function () {
  //       todoList.splice(Number(newTodoButtonElement.id));
  //       todoListElement.removeChild(
  //         document.getElementById(`p-${newTodoButtonElement.id}`)
  //         todoIndex--;
  //       );
  //     };
  //     newTodoPElement.appendChild(newTodoButtonElement);
  //     todoListElement.appendChild(newTodoPElement);
  //     todoIndex++;
  //     todoInputElement.value = "";
  //   }
  renderTodoList();
}
