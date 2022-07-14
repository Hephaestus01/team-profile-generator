const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const generateCards = templateData => {
    let info = "";
    templateData.map((employee) => {
        console.log(employee.name)
        info += `
                        <div class="card">
                    <div class="card-header">
                        <h3>${employee.name}</h3>
                        <h3>${employee.role}</h3>
                    </div>
                    <div class="card-body">
                        <p>ID: ${employee.id}</p>
                        <p>Email: ${employee.email}</p>
                        ${employee.role === 'Manager' ? '<p>Office: ' + employee.office + '</p>' : ''}
                        ${employee.role === 'Engineer' ? '<p>GitHub: ' + employee.github + '</p>' : ''}
                        ${employee.role === 'Intern' ? '<p>School: ' + employee.school + '</p>' : ''}
                    </div>
                </div>
        `

    })
    return info;
};


function generatePage(templateData) {

    return `
    <!DOCTYPE html >
        <html lang="en">

            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="style.css">
                    <title>Document</title>
            </head>

            <body>
                <header><h1>Meet the Team</h1></header>

                    <main class="card-section">
                        ${generateCards(templateData)}
                    </main>
            </body>
        </html>
`
}


module.exports = generatePage
