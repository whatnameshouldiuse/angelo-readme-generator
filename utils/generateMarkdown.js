function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Apache2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        case 'BSD3':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        case 'BSD2':
            return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        case 'CC0':
            return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
        case 'GNUL3':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
        case 'GNU3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        case 'MPL2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'EPL1.0':
            return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        default:
            return '';
    }
}

function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return '[MIT License](https://opensource.org/licenses/MIT)';
        case 'Apache2.0':
            return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
        case 'ISC':
            return '[ISC License](https://opensource.org/licenses/ISC)';
        case 'BSD3':
            return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
        case 'BSD2':
            return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)';
        case 'CC0':
            return '[Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/)';
        case 'GNUL3':
            return '[GNU Lesser General Public License 3.0](https://www.gnu.org/licenses/lgpl-3.0)';
        case 'GNU3':
            return '[GNU General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0)';
        case 'Unlicense':
            return '[The Unlicense](http://unlicense.org/)';
        case 'MPL2.0':
            return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
        case 'EPL1.0':
            return '[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)';
        default:
            return 'No License';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#Questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
[Owner Profile](https://github.com/${data.username})
Please contact the following Email for any questions: ${data.email}

## License
${renderLicenseLink(data.license)}`;
}

module.exports = { generateMarkdown };