module.exports = generatePage

const generateCards = templateData => {
    return "hello world!!!"
}

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


