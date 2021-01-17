const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', '007886', 'dave@gmail.com', 'daveGit');
    
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('007886');
    expect(engineer.email).toBe('dave@gmail.com');
    expect(engineer.github).toBe('daveGit');
});

test('gets engineers github username', () => {
    const engineer = new Engineer('Dave', '007886', 'dave@gmail.com', 'daveGit');
    
    expect(engineer.getGithub()).toBe('daveGit');
});

test('gets engineers role', () => {
    const engineer = new Engineer('Dave', '007886', 'dave@gmail.com', 'daveGit');
    
    expect(engineer.getRole()).toBe('Engineer');
});