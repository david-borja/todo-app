const todoList = [];

let operation = prompt("What would you like to do?");

while (operation !== "quit") {
  if (operation === "new") {
    let todoText = prompt("Enter new todo");
    todoList.push(todoText);
    console.log(`${todoText} added to list`);
  } else if (operation === "list") {
    console.log("**********");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log("**********");
  } else if (operation === "delete") {
    const index = parseInt(
      prompt(
        `Enter index of todo to delete (max index is: ${todoList.length - 1})`
      )
    );
    if (!Number.isNaN(index)) {
      console.log(`${todoList[index]} - Removed`);
      todoList.splice(index, 1);
    } else {
      console.log("Unknown index");
    }
  }
  operation = prompt("What would you like to do?");
}
