const sampleData = require('../__tests__/sample-answers');
const writeFile = require('./generate-html');

class HTMLData {
    constructor(userInput) {
        this.userInput = userInput;
        this.cardData = '';
        this.htmlData = '';
    }

    initializeHTMLBuilder() {
        for (let i=0;i<this.userInput.length;i++) {
            this.cardData += this.buildCard(this.userInput[i]);
        }
        this.htmlData = this.buildTemplate(this.cardData);
    };

    buildCard(employee) {
        let specialLine = '';
        if (employee.constructor.name === 'Manager') {
            specialLine =`<li class="list-group-item">Office Number: ${employee.officeNo}</li>`
        } else if (employee.constructor.name === 'Engineer') {
            specialLine = `<li class="list-group-item">Github username: <a href="https://github.com/${employee.github}">${employee.github}</a></li>`
        } else if (employee.constructor.name === 'Intern') {
            specialLine = `<li class="list-group-item">School: ${employee.school}</a></li>`
        }
        return `<div class="card m-3">
                <div class="card-header text-light bg-primary">${employee.name}</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="${employee.email}">${employee.email}</a></li>
                        ${specialLine}
                    </ul>
                </div>
            </div>`
    };

    buildTemplate(cardData) {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
</head>
<body>
    <header class="navbar bg-danger text-light d-flex justify-content-center">
        <h1>My Team</h1>
    </header>
    <main>
        <div id="card-container" class="row justify-content-center m-2">
            ${cardData}
        </div>
    </main>
</body>
</html>
    `
    }

}



const temp = new HTMLData(sampleData);

temp.initializeHTMLBuilder();

writeFile(temp.htmlData);

module.exports = HTMLData;