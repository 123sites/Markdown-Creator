// fs is a Node standard library package for reading and writing files
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [    
  

{
  type: 'input',
  message: 'What is the name of your repository?',
  name: 'repo-name',
},
{
  type: 'input',
  message: 'How would you describe your project?',
  name: 'describe',
},
{
  type: 'input',
  message: 'What are the instructions for installation?',
  name: 'installation',
},
{
  type: 'input',
  message: 'What is the usage information?',
  name: 'usage',
},
{
  type: 'input',
  message: 'Are there any contributions?',
  name: 'contributing',
},
{
  type: 'input',
  message: 'What are the test instructions?',
  name: 'test',
},
{
  type: 'list',
  message: 'What is the license for your project?',
  choices: ['MIT', 'Apache License 2.0', 'GNU v3.0' ],
  name: 'license',
},
{
  type: 'input',
  message: 'What is your GitHub username?',
  name: 'username',
},
{
  type: 'input',
  message: 'What is your email address?',
  name: 'email',
},];

// TODO: Create a function to write README file
function createFile(fileName, data) {
  // Writes to the file with anything you pass in as process.argv[2]
fs.writeFile(fileName, data, (err) =>
// fs.writeFile(generateMarkdown.js, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {inquirer
  .prompt(questions) 
  .then((response) =>{
  console.log(response);
  }
  );
}

// Function call to initialize app
init();

