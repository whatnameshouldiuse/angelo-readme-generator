//#region Require
const inquirer = require('inquirer');
const generator = require('./utils/generateMarkdown.js')
const fs = require('fs');

const questions = [{
        type: 'input',
        message: 'Enter your project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter project description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter project installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter project usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter project contribution guidelines:',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Enter project test instructions:',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please choose the license:',
        name: 'license',
        choices: [
            {
                name: 'No License',
                value: ''
            },
            {
                name: 'MIT License',
                value: 'MIT'
            },
            {
                name: 'Apache License 2.0',
                value: 'Apache2.0'
            },
            {
                name: 'ISC License',
                value: 'ISC'
            },
            {
                name: 'BSD 3-Clause License',
                value: 'BSD3'
            },
            {
                name: 'BSD 2-Cluase License',
                value: 'BSD2'
            },
            {
                name: 'Creative Commons Zero',
                value: 'CC0'
            },
            {
                name: 'GNU Lesser General Public License 3.0',
                value: 'GNUL3'
            },
            {
                name: 'GNU General Public License 3.0',
                value: 'GNU3'
            },
            {
                name: 'The Unlicense',
                value: 'Unlicense'
            },
            {
                name: 'Mozilla Public License 2.0',
                value: 'MPL2.0'
            },
            {
                name: 'Eclipse Public License 1.0',
                value: 'EPL1.0'
            },
        ]
    },
    {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your contact email address:',
        name: 'email'
    }
];

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        fs.writeFile('README.md', generator.generateMarkdown(data));
    })
    .then(() => {
        console.log('README file successfully generated');
    })
    .catch((err) => console.error(err));
}

init();