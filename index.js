#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
console.log(answer);
// conditional statement
if (answer.operator === "addition") {
    const result = answer.firstnumber + answer.secondnumber;
    console.log("The result is: " + result);
}
else if (answer.operator === "subtraction") {
    const result = answer.firstnumber - answer.secondnumber;
    console.log("The result is: " + result);
}
else if (answer.operator === "multiplication") {
    const result = answer.firstnumber * answer.secondnumber;
    console.log("The result is: " + result);
}
if (answer.operator === "division") {
    if (answer.secondnumber !== 0) {
        const result = answer.firstnumber / answer.secondnumber;
        console.log("The result is: " + result);
    }
    else {
        console.log("Error: Division by zero");
    }
}
