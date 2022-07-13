const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.getOffice();
        this.role = 'Manager';
    }

    getOffice() {
        return this.office;
    }
}

module.exports = Manager;