const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.role = 'Engineer';
        this.getGithub();
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;