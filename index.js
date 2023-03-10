// TODO: High-quality, professional README.md is generated with the title of my project
// SECTIONS: entitled Description, Table of Contents, Installation, Usage, License,
// Contributing, Tests, and Questions

// TITLE:
// THEN: Enter a description, installation instructions, usage information, contribution
// guidelines, and test instructions sections of the
// README ENTITLED: Description, Installation, Usage, Contributing, and Tests

// CHOOSE A LICENSE VIA OPTIONS LIST:
// A badge for that license is added near the top of the README and a notice is added to the
// section of the README entitled License that explains which license the application is
// covered under

// GITHUB USERNAME: This is added to the section of the README entitled Questions, with a
// link to my GitHub profile

// EMAIL ADDRESS: This is added to the section of the README entitled Questions, with
// instructions on HOW TO REACH ME with additional questions

// CLICK THE LINKS TO: The Table of Contents THEN I am taken to the corresponding section
// of the README
// ////////////////////////////////////////////////////////////////////////////////////////////

// External package:
// fs is a Node standard library package for reading and writing files
const fs = require("fs");

// Internal modules:
const generateMarkdown = require("./utils/generateMarkdown");

// External package:
// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username? (No @ needed)",
    name: "username",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "How would you describe your project?",
    name: "describe",
  },
  {
    type: "input",
    message: "What are the instructions for installation?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "list",
    message: "What is the license for your project?",
    choices: [
      "MIT",
      "Apache",
      "GNU AGPL v3",
      "GNU GPL v3",
      "Unlicense",
    ],
    name: "license",
  },
  {
    type: "input",
    message: 'What are the contribution guidelines? (If none, type "none")',
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the features for this?",
    name: "features",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function createFile(fileName, data) {
  // Writes to the file with anything you pass in as process.argv[2]
  fs.writeFile(fileName, data, (err) =>
    // fs.writeFile(generateMarkdown.js, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const markdown = generateMarkdown(answers);
    createFile("./app/README.md", markdown);
  });
}

// Function call to initialize app
init();
