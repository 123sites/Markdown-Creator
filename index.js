// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [    {
  type: 'input',
  message: 'What is your user name?',
  name: 'username',
},
{
  type: 'password',
  message: 'What is your password?',
  name: 'password',
},
{
  type: 'password',
  message: 'Re-enter password to confirm:',
  name: 'confirm',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
