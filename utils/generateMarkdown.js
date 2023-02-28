// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    let badge;
    switch (license) {
      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case "Apache":
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case "GNUag3":
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
        break;
      case "GNUgp3":
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case "Unlicense":
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        break;  
      default:
        return ``;
        break;
    }
  }
// TODO: Create a function to generate markdown for README
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInfo) {
if ("MIT") {
  return `
  A short and simple permissive license with conditions only requiring 
  preservation of copyright and license notices. Licensed works, 
  modifications, and larger works may be distributed under different 
  terms and without source code.`;
}
else if ("Apache") {
  return `
  A permissive license whose main conditions require preservation of 
  copyright and license notices. Contributors provide an express grant 
  of patent rights. Licensed works, modifications, and larger works may 
  be distributed under different terms and without source code.
  `;
}
else if ("GNUag3") {
  return `
  Permissions of this strongest copyleft license are conditioned on 
  making available complete source code of licensed works and modifications, 
  which include larger works using a licensed work, under the same 
  license. Copyright and license notices must be preserved. 
  Contributors provide an express grant of patent rights. When a 
  modified version is used to provide a service over a network, the 
  complete source code of the modified version must be made available.
  `;
}
else if ("GNUgp3") {
  return `
  Permissions of this strong copyleft license are conditioned on making 
  available complete source code of licensed works and modifications, 
  which include larger works using a licensed work, under the same 
  license. Copyright and license notices must be preserved. 
  Contributors provide an express grant of patent rights.
  `;
}
else if ("Unlicense") {
  return `
  A license with no conditions whatsoever which dedicates works to the 
  public domain. Unlicensed works, modifications, and larger works may 
  be distributed under different terms and without source code.
  `;
}
  else () =>{
  return ``;
}
  }

      function generateMarkdown(data) {
        return `
# ${data.title}

${renderLicenseLink(data.license)}

## Description

${data.describe}

## Table of Contents

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

* Checkout my [GitHub profile](https://github.com/${data.username})
  
* Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 

## License

Copyright (c) [${data.username}](https://github.com/${data.username}). All rights reserved.

Licensed under the ${data.licenseInfo} license.

`;
      }
// ${renderLicenseSection(data.licenseInfo)}

module.exports = generateMarkdown;
//     }
//   }
// }

// ![License Badge](https://img.shields.io/github/license/${data.github}/${data.repo})
