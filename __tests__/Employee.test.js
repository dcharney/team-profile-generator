const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', '007886', 'dave@gmail.com');
    
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('007886');
    expect(employee.email).toBe('dave@gmail.com');
});

test('gets employees name', () => {
    const employee = new Employee('Dave', '007886', 'dave@gmail.com');
    
    expect(employee.getName()).toBe('Dave');
});

test('gets employees id', () => {
    const employee = new Employee('Dave', '007886', 'dave@gmail.com');
    
    expect(employee.getId()).toBe('007886');
});

test('gets employees email', () => {
    const employee = new Employee('Dave', '007886', 'dave@gmail.com');
    
    expect(employee.getEmail()).toBe('dave@gmail.com');
});

test('gets employees role', () => {
    const employee = new Employee('Dave', '007886', 'dave@gmail.com');
    
    expect(employee.getRole()).toBe('Employee');
});