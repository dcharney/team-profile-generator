const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

module.exports = [
    new Manager('Phil','001','phil@company.com','007'),
    new Engineer('Delaney','102','delaney@company.com','dcharney'),
    new Intern('Mike','304','mike@harvard.eu','Harvard'),
    new Engineer('Steve','103','steve@company.com','sjcharney'),
    new Engineer('Frank','103','frank@company.com','frankieFrankieFrankFrank')
];