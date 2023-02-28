// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = Brand ('MIT', 'Apache', 'GNUag3', 'GNUgp', 'GNUlg', 'Unlicense')
  this.type = type;
  this.color = color;
}

function renderLicenseLink(license) {
  const link = Brand ('MIT', 'Apache', 'GNUag3', 'GNUgp', 'GNUlg', 'Unlicense')
  this.type = type;
  this.color = color;
}


  // if (value === "") {
  //   if (license === 'Apache') {
  //     return `![${license}: Apache](https://img.shields.io/badge/License-${license}-blue.svg)`;
  // // ![alt text](image.jpg)
  //   // if (license === 'GNU') {
  //   //   return `[![${license}: GNU](https://img.shields.io/badge/License-${license})](https://www.gnu.org/licenses/agpl-3.0)`;
  //   // }
  // }}
// }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string


  // function renderLicenseLink(license) {

  function generateLicenseUrl(license) {
    let badge;
    switch (license) {
      case "MIT":
        path = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Apache":
        path = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "GNUag3":
        path = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
      case "GNUgp3":
        path = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "GNUlg3":
        path = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        break;
      case "Unlicense":
        path = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        break;  
    }
  }

  //   return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;

  //   // // TODO: Create a function that returns the license section of README
  //   // // If there is no license, return an empty string
  //   function renderLicenseSection(license) {
  //     function generateLicenseUrl(license) {
  //       let path;

  //       switch (license) {
  //         case "GNU AGPLv3":
  //           path = "agpl-3.0";
  //           break;
  //         case "GNU GPLv3":
  //           path = "gpl-3.0";
  //           break;
  //         case "GNU LGPLv3":
  //           path = "lgpl-3.0";
  //           break;
  //         case "Apache License 2.0":
  //           path = "apache-2.0";
  //           break;
  //         case "MIT License":
  //           path = "mit";
  //           break;
  //         case "The Unlicense":
  //           path = "unlicense";
  //           break;
  //       }
  //     }

      // TODO: Create a function to generate markdown for README
      function generateMarkdown(data) {
        return `
# ${data.title}

## Description

${data.describe}

## Table of Contents

${data.contents}

1. [Installation](##installations)
2. [Usage](##usage)
3. [Contributing](##contributing)
4. [Tests](##tests)
5. [Questions](##questions)
6. [License](##license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

* Checkout my [GitHub profile](https://github.com/${data.github})
https://github.com/123sites?tab=repositories
  
* Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 

## License

Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved.

Licensed under the ${data.license} license.

`;
      }

module.exports = generateMarkdown;
//     }
//   }
// }

// ![License Badge](https://img.shields.io/github/license/${data.github}/${data.repo})
