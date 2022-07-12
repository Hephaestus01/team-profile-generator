const inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./src/page-template');
const Employee = require('./lib/Employee');

// add questions
const promptUser = () => {

    return inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: 'Enter team manager name:'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter team manager Employee ID (Default: 1):',
                default: '1'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter team manager e-mail address:'
            },
            {
                type: 'number',
                name: 'office',
                message: 'Enter team manager office number:'
            }
        ])
        
        
        .then(({ name, id, email, office }) => {
            this.employee = new Employee(name);
        })


}


// function to initialize app
function init() {
    promptUser()
        .then(employeeData => {
            return generatePage(employeeData);
        })
        .then(pageHtml => {
            return new Promise((resolve, reject) => {
                fs.writeFile('./dist/index.html', pageHtml, err => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve({
                        ok: true,
                        message: 'File created'
                    })
                })
            })
        })
};

// initialize app
init();