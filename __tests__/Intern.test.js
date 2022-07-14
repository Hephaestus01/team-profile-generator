const Intern = require('../lib/Intern');


test('creates an employee object', () => {
    const employee = new Intern('Zeek');

    expect(employee.name).toBe('Zeek');
});