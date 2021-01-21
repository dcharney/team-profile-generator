const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const userPrompts = require('./userPrompts');
const buildFileContent = require('./html-template');
const writeFile = require('./generate-html');
const HTMLData = require('./html-template');


class teamBuilder {
    constructor() {
        this.employees = [];
    }

    initializeTeamBuilder() {
        console.log(`
   *~~~*~~~*~~~**~~~*~~~*~~~*

   WELCOME TO THE TEAM BUILDER
  you are a few short prompts away
from your professional team profile!
-------------------------------------
`)

        inquirer
            .prompt(userPrompts.manager)
            .then(answers => {
                this.employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNo));

                this.checkIfDone();
            })
    };

    addEmployee() {
        inquirer.prompt({
            type: 'list',
            name: 'type',
            message: 'Which type of employee would you like to add next?',
            choices: ['Engineer', 'Intern']
        })
        .then(answers => {
            if (answers.type === 'Engineer') {
                inquirer.prompt(userPrompts.engineer)
                    .then(answers => {
                        this.employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));

                        this.checkIfDone();
                    })
            } else {
                inquirer.prompt(userPrompts.intern)
                    .then(answers => {
                        this.employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));

                        this.checkIfDone();
                    })
            }
        });
    };

    checkIfDone() {
        inquirer
            .prompt({
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another employee?'
            })
            .then(data => {
                if (data.addEmployee) {this.addEmployee()} else {this.generateHTML()};
            });
    }

    generateHTML() {
        console.log('Generating your custom team page...')
        //console.log(this.employees);

        const fileData = new HTMLData(this.employees);
        fileData.initializeHTMLBuilder();

        writeFile(fileData.htmlData);

        console.log('Your custom team page can now be found at /dist/index.html');
    }

}

module.exports = teamBuilder;