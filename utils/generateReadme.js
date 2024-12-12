function generateReadme(data) {
    return `
# ${data.projectTitle}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any issues, please contact me at ${data.email} or find me on GitHub: [${data.username}](https://github.com/${data.username}).
    `;
}

module.exports = generateReadme;
