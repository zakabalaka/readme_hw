const fs = require('fs');
const inquirer = require('inquirer');

async function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
}

// Function to generate the README content
function generateREADME(data) {
    return `
# ${data.projectTitle}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For issues, contact me at ${data.email}. You can also find me on GitHub: [${data.username}](https://github.com/${data.username}).

    `;
}

// Async function to initialize the project
async function init() {
    try {
        const answers = await promptUser();
        const readmeContent = generateREADME(answers);
        
        // Write the README content to a file
        fs.writeFileSync('README.md', readmeContent, 'utf8');
        console.log('README.md file has been generated successfully!');
    } catch (err) {
        console.error("Error occurred while prompting the user:", err);
    }
}

init();

