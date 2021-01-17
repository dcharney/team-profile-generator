const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Dave', '007886', 'dave@gmail.com', 'UCF');
    
    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe('007886');
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.school).toBe('UCF');
});

test('gets interns school', () => {
    const intern = new Intern('Dave', '007886', 'dave@gmail.com', 'UCF');
    
    expect(intern.getSchool()).toBe('UCF');
});

test('gets interns role', () => {
    const intern = new Intern('Dave', '007886', 'dave@gmail.com', 'UCF');
    
    expect(intern.getRole()).toBe('Intern');
});