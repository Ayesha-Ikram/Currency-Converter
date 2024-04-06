#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition;
while(true){
const currency : any={
    USD:1, // base currency
    PKR:280,
    EUR:0.90,
    GBP:0.75,
    INR:74,
};


 let user_answer = await inquirer.prompt([
    {
      type: "list",
      name: "from",
      message: (chalk.magenta("Enter From Currency :")),  
      choices:["USD","PKR","EUR","GBP","INR"],
    },
    {
        type: "input",
        name: "to",
        message: (chalk.yellow("Enter To Currency : ")), 
      },
      {
        type:"number",
        name:"amount",
        message:(chalk.cyan("Enter Your Amount : ")),
      }
 ]);


 let fromAmount =currency[user_answer.from];
 let toAmount =currency[user_answer.to];
 let amount =user_answer.amount;
 let baseAmount =amount/fromAmount;
 let convertedAmount = baseAmount*toAmount;
 console.log(chalk.bgBlueBright(convertedAmount));
}
 