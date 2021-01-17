const Manager = require('../lib/Manager');

test('creates an engineer object', () => {
    const manager = new Manager('Dave', '007886', 'dave@gmail.com', '24');
    
    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe('007886');
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.officeNo).toBe('24');
});

test('gets managers role', () => {
    const manager = new Manager('Dave', '007886', 'dave@gmail.com', '24');
    
    expect(manager.getRole()).toBe('Manager');
});