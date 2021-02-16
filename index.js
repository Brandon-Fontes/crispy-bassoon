// TODO: Include packages needed for this application
import {writeFile} from "fs";
import pkg from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown.js";

const {prompt} = pkg;
const licenseChoices = [
    "Apache 2.0",
    "Mozilla Public License",
    "Microsoft Public License",
    "None"
];
// TODO: Create an array of questions for user input
const userQuestions = [
    {
        type: "input",
        message: "What is your projects name?",
        name: "Title"
    },
    {
        type: "input",
        message: "Give a description of your project.",
        name: "Description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "Install"
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "Directions"
    },
    {
        type: "list",
        message: "What license are you using?",
        name: "License",
        choices: licenseChoices
        
    },
    {
        type: "input",
        message: "how would you test this?",
        name: "Test"
    },
    {
        type: "input",
        message: "Are there any contributors on this project?",
        name: "contribution"
    },
    
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err){
            throw err;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    prompt(userQuestions).then(answer => {
        const response = generateMarkdown(answer, licenseChoices);
        console.log(answer);
        writeToFile("README.md", response);
    })
};

// Function call to initialize app
init();
