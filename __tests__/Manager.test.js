const Manager = require('../lib/Manager');


test('creates an employee object', () => {
    const employee = new Manager('Zeek');

    expect(employee.name).toBe('Zeek');
});