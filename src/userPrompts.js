
module.exports = {
    manager: [
        {
            type:'text',
            message: "Please enter the team manager's name:",
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You must enter an employee name to proceed');
                    return false;
                }
            }
        },
        {
            type:'text',
            message: "Please enter the team manager's ID number:",
            name: 'id',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('You must enter an employee id number to proceed');
                    return false;
                }
            }
        },
        {
            type:'text',
            message: "Please enter the team manager's email:",
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You must enter an email address to proceed');
                    return false;
                }
            }
        },
        {
            type:'text',
            message: "Please enter the team manager's office number:",
            name: 'officeNo',
            validate: officeNo => {
                if (officeNo) {
                    return true;
                } else {
                    console.log('You must enter an office number to proceed');
                    return false;
                }
            }
        }
    ],

    engineer: [
        {
            type:'text',
            message: "Please enter the engineer's name:",
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You must enter an employee name to proceed');
                    return false;
                }
            }
        },
        {
            type:'text',
            message: "Please enter the engineer's ID number:",
            name: 'id',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('You must enter an employee id number to proceed');
                    return false;
                }
            }
        },
        {
            type:'text',
            message: "Please enter the engineer's email:",
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You must enter an email address to proceed');
                    return false;
                }
            }
        },
        {
            type:'text',
            message: "Please enter the engineer's github username:",
            name: 'github',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('You must enter a github username to proceed');
                    return false;
                }
            }
        }
    ],

    intern: [
        {
            type:'text',
            message: "Please enter the intern's name:",
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You must enter an employee name to proceed');
                    return false;
                }
            }
        },
        {
            type:'text',
            message: "Please enter the intern's ID number:",
            name: 'id',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('You must enter an employee id number to proceed');
                    return false;
                }
            }
        },
        {
            type:'text',
            message: "Please enter the intern's email:",
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You must enter an email address to proceed');
                    return false;
                }
            }
        },
        {
            type:'text',
            message: "Please enter the intern's school:",
            name: 'school',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('You must enter a school to proceed');
                    return false;
                }
            }
        }
    ]
};