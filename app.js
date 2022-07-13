const inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArr = [];

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
            },

        ])

        .then(({ name, id, email, office }) => {

            const manager = new Manager(name, id, email, office);
            teamArr.push(manager);
        })
};

const promptRoster = teamData => {
        teamData = [...teamArr]
    
    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add an employee to the roster?',
                default: false
            },
            {
                type: 'list',
                name: 'employeeRole',
                message: 'Choose employee role:',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter Employee name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter Employee ID number:',
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter employee's email address:",
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter employee's GitHub username:",
                when: ({ employeeRole }) => employeeRole === 'Engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter intern's school:",
                when: ({ employeeRole }) => employeeRole === 'Intern'
            },
            {
                type: 'confirm',
                name: 'addToRoster',
                message: 'Would you like to add another employee to the roster?',
                default: false
            }
        ])
        .then(({ employeeRole, name, id, email, github, school, addToRoster }) => {
            if (employeeRole === 'Engineer') {
                teamData.push(new Engineer(name, id, email, employeeRole, github));
            } else {
                const intern = new Intern(name, id, email, employeeRole, school);
                teamData.push(intern);
            };
            if (addToRoster) {
                return promptRoster();
            } else { return teamData };
        })
};



// function to initialize app
function init() {
    promptUser()
        .then(promptRoster)
        .then(teamData => {
            return generatePage(teamData);
            // console.log(employeeData);
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