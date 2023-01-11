let command = prompt("What would you like to do?");

let toDo = [];

while (command !== "quit" || command !== null) {
    if (command === "new") {
        command = prompt("Enter new todo");
        toDo.push(command);
        console.log(`${toDo} added to list`);
    } else if (command === "list") {
        console.log("*************")
        for (i = 0; i < toDo.length; i++) {
            console.log(`${i}: ${toDo[i]}`);
        }
        console.log("*************")
    } else if (command === "delete") {
        command = prompt("Enter index of todo to remove");
        toDo.splice(command, 1);
        console.log("Todo removed");
    }
    command = prompt("What would you do?");
}
console.log("OK, YOU QUIT THE APP");