// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [    {
  type: 'title',
  message: 'What is the title of your project?',
  name: 'title',
},
{
  type: 'repo-name',
  message: 'What is the name of your repository?',
  name: 'repo-name',
},
{
  type: 'describe',
  message: 'How would you describe your project?',
  name: 'describe',
},
{
  type: 'installation',
  message: 'What are the instructions for installation?',
  name: 'installation',
},
{
  type: 'usage',
  message: 'What is the usage information?',
  name: 'usage',
},
{
  type: 'contributing',
  message: 'Are there any contributions?',
  name: 'contributing',
},
{
  type: 'test',
  message: 'What are the test instructions?',
  name: 'test',
},
{
  type: 'license',
  message: 'What is the license for your project?',
  name: 'license',
},
{
  type: 'username',
  message: 'What is your GitHub username?',
  name: 'username',
},
{
  type: 'email',
  message: 'What is your email address?',
  name: 'email',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
