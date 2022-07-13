class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    };

    getId() {
        return this.id
    };


    getEmail() {
        return this.email
    };


    getRole() {
        if (this.office) {
            return 'Manager';
        }
    };
}

module.exports = Employee