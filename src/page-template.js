const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const generateCards = templateData => {
    let info = "";
    templateData.forEach((employee) => {
        console.log(employee.name)
        info += `
                <div class="card">
                    <div class="card-header>    
                        <h3>${employee.name}</h3>
                        <h3>${employee.role}</h3>
                    </div>
                    <div class="card-body">
                        <p>ID: ${employee.id}</p>
                        <p>Email: ${employee.email}</p>
                        
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
                    <title>Document</title>
            </head>

            <body>
                <header>Meet the Team</header>

                <main>
                    <div class="cards">
                        <div class="card">card 1</div>
                        <div class="card">card 2</div>
                        <div class="card">card 3</div>
                        ${generateCards(templateData)}
                    </div>
                </main>
            </body>
        </html>
`
}


module.exports = generatePage
