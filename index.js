const inquirer = require('inquirer');

// Prompt user for inputs
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

// Async function to initialize the project
async function init() {
    try {
        const answers = await promptUser();
        console.log(answers);  // Just to see the answers from the user
        // Add other logic to handle the data (e.g., writing to a file)
    } catch (err) {
        console.error("Error occurred while prompting the user:", err);
    }
}

init();
