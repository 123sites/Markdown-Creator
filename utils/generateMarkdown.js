// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (value === "") {
  return "[![License: AGPL v3](https://img.123sites.io/badge/License)](https://www.gnu.org/licenses/agpl-3.0)";
} else if (value === "GNU GPLv3")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

![License Badge](https://img.shields.io/github/license/${data.github}/${data.repo})
// ![Badges Link](https://github.com/123sites?tab=achievements)

## Description

${data.describe}

## Table of Contents

1. [Installation](#installation),
2. [Usage](#usage),
3. [Contribution](#contribution)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributions

${data.contributions}

## Tests

${data.tests}

## Questions

* Checkout my [GitHub profile](https://github.com/${data.github})
https://github.com/123sites?tab=repositories
  
* Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 

## License

Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved.

Licensed under the ${data.license} license.

## Badges


## Features

`;
}

module.exports = generateMarkdown;
