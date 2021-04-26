function generateHTML(response) {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web Team Builder</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="Assets/css/style.css">
    </head>
    
    <body>
    
        <div class="container-fluid">
            <div>
                <header>
                    <h1>My Team</h1>
                </header>
            </div>
            <main>
                <div class="employee-section container">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header">
                                <h5 class="employee-name">Employee Name</h5>
                                <h6 class="employee-position mb-2 text-muted">Employee Position</h6>
                            </div>
                            <div class="card-content">
                                <p>Employee content
                                </p>
                            </div>
    
    
                        </div>
                    </div>
                </div>
            </main>
        </div>
    
    </body>
    
    </html>`;
}

module.exports = generateHTML.js;
