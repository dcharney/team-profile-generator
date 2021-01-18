const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const userPrompts = require('./userPrompts');

class teamBuilder {
    constructor() {
        this.index = 0;
    }

    initializeTeamBuilder() {
        console.log(`
   *~~~*~~~*~~~**~~~*~~~*~~~*

   WELCOME TO THE TEAM BUILDER
  you are a few short prompts away
from your professional team profile!
-------------------------------------

We will begin with the MANAGER:`)

        inquirer
            .prompt(userPrompts.manager)
            .then(answers => {
                let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNo);

                console.log(manager.getEmail());
            })
    };

}

module.exports = teamBuilder;