const Engineer = require('../lib/Engineer');


test('creates an employee object', () => {
    const employee = new Engineer('Zeek');

    expect(employee.name).toBe('Zeek');
});