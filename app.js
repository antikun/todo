let command = prompt("What would you like to do?");

const toDo = [];

while (command !== "quit" && command != null) {
    if (command === "new") {
        const newToDo = prompt("Enter new todo:");
        toDo.push(newToDo);
        console.log(`${newToDo} added to the list.`);
    } else if (command === "list") {
        console.log("*************")
        for (let i = 0; i < toDo.length; i++) {
            console.log(`${i}: ${toDo[i]}`);
        }
        console.log("*************");
    } else if (command === "delete") {
        const delToDo = parseInt(prompt("Enter index of todo to remove:"));
        if (!Number.isNaN(delToDo)) {
            const deleted = toDo.splice(delToDo, 1);
            console.log(`${deleted} was deleted.`);
        } else {
            console.log("Enter a valid number.");
        }
    }
    command = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");