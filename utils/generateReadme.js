// utils/generateReadme.js
function generateReadme(answers) {
  return `
# ${answers.projectTitle}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, please contact me at ${answers.email} or find me on GitHub: [${answers.username}](https://github.com/${answers.username}).

  `;
}

module.exports = generateReadme;

