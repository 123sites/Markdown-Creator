// External package:
// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Internal modules:
const generateMarkdown = require("./utils/generateMarkdown")
// ADD A FILE WITHIN THE UTILS FOLDER??????
// const api = require('')
// DO I NEED THE BELOW TO LINK TO EMAIL ME?????
// https://www.w3schools.com/nodejs/nodejs_email.asp
// URL MODULE???? https://www.w3schools.com/nodejs/ref_url.asp
var nodemailer = require('nodemailer');
// links it to the badges:
const licenseBadge = require("./utils/licenseBadge").licenseBadge;
// NEEDED OR NOT?
//Allows for use of async await
// const writeFileAsync = util.promisify(fs.writeFile);

// External package:
// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [    

{
  type: 'input',
  message: 'What is your GitHub username? (No @ needed)',
  name: 'username',
},
{
  type: 'input',
  message: 'What is the name of your repository?',
  name: 'repo',
},
{
  type: 'input',
  message: 'What is the title of your project?',
  name: 'title',
},
{
  type: 'input',
  message: 'How would you describe your project?',
  name: 'describe',
},
{
  type: 'list',
  message: '?',
  name: 'contents',
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
  type: 'list',
  message: 'What is the license for your project?',
  choices: ['MIT', 'Apache License 2.0', 'GNU v3.0' ],
  name: 'license',
},
{
  type: 'input',
  message: 'Name all the collaborators for this project.',
  name: 'credits',
},
{
  type: 'input',
  message: '',
  name: 'license',
},
{
  type: 'input',
  message: '',
  name: 'badges',
},
{
  type: 'input',
  message: '',
  name: 'features',
},
{
  type: 'input',
  message: 'What are the test instructions?',
  name: 'test',
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
  .then((answers) =>{
  console.log(answers);
  const markdown = generateMarkdown(answers);
  createFile("README.md", markdown)
  }
  );
}

// Function call to initialize app
init();

