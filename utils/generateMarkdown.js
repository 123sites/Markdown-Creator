// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (value === "") {
  //   if (license === 'Apache') {
  //     return `![${license}: Apache](https://img.shields.io/badge/License-${license}-blue.svg)`;
  // // ![alt text](image.jpg)
  //   // if (license === 'GNU') {
  //   //   return `[![${license}: GNU](https://img.shields.io/badge/License-${license})](https://www.gnu.org/licenses/agpl-3.0)`;
  //   // }
  // }}
}
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  // function renderLicenseLink(license) {
  //   function generateLicenseUrl(license) {
  //     let badge;

  //     switch (license) {
  //       case "GNU AGPLv3":
  //         path = "agpl-3.0";
  //         break;
  //       case "GNU GPLv3":
  //         path = "gpl-3.0";
  //         break;
  //       case "GNU LGPLv3":
  //         path = "lgpl-3.0";
  //         break;
  //       case "Apache License 2.0":
  //         path = "apache-2.0";
  //         break;
  //       case "MIT License":
  //         path = "mit";
  //         break;
  //       case "The Unlicense":
  //         path = "unlicense";
  //         break;
  //     }
  //   }
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

<style>
violet { color: violet }
</style>

<violet> # ${data.title} </violet>

<violet>## Description</violet>

${data.describe}

<violet>## Table of Contents</violet>
${data.contents}

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License](#license)

<violet>## Installation</violet>

${data.installation}

<violet>## Usage</violet>

${data.usage}

<violet>## License</violet>

${data.license}

<violet>## Collaborators</violet>

${data.collaborators}

<violet>## Tests</violet>

${data.tests}

<violet>## Questions</violet>

* Checkout my [GitHub profile](https://github.com/${data.github})
https://github.com/123sites?tab=repositories
  
* Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 

<violet>## License</violet>

Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved.

Licensed under the ${data.license} license.

`;
      }

      module.exports = generateMarkdown;
//     }
//   }
// }

// ![License Badge](https://img.shields.io/github/license/${data.github}/${data.repo})
