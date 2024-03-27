#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 21;
let pinAnswere = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin: ",
    type: "number",
  },
]);

if (pinAnswere.pin === myPin) {
  console.log("Correct pin code!!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);
  // console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    // myBalance -= amountAns.amount
    // console.log(`Your remaining balance is: ${myBalance}`)
    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance!");
    } else {
      myBalance -= amountAns.amount;
      console.log(`Your remaining balance is: ${myBalance}`);
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`your balance is: ${myBalance}`);
  } else if (operationAns.operation === "fast cash") {
    let ans = await inquirer.prompt([
      {
        name: "amount",
        message: "Select your amount",
        type: "list",
        choices: [2000, 3000, 5000],
      },
    ]);
    if (ans.amount === 2000) {
      myBalance -= ans.amount;
      console.log(`your remaining balance is ${myBalance}`);
    } else if (ans.amount === 3000) {
      myBalance -= ans.amount;
      console.log(`your remaining balance is ${myBalance}`);
    } else if (ans.amount === 5000) {
      myBalance -= ans.amount;
      console.log(`your remaining balance is ${myBalance}`);
    }
  }
} else {
  console.log("Incorrect pin code");
}
