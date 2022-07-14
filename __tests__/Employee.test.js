const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Zeek');

    expect(employee.name).toBe('Zeek');
});