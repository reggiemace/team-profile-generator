const Manager = require("./Manager");
const fs = require("fs");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Employee = require("./Employee");

function generateHTML(response) {
  console.log("start of function");
  return "html"
  //html = `some html`;
  if (response instanceof Employee) {
    console.log(true);
    // fs.writeFile("index.html", html, (err) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log("bad coding");
    //   }
    //   console.log(employee);
    // });

    // employeeString = "This is some html";
    // return employeeString;
    // console.log(employeeString);
    //console.log("There is a manager");
  }

  //return employeeString;
}
// let employeeString = "";
// for (var i = 0; i < response.length; i++) {
//   if (response[i] instanceof Manager) {
//     employeeString += `
        // <div class="employee-section container">
        //             <div class="card" style="width: 18rem;">
        //                 <div class="card-body">
        //                     <div class="card-header">
        //                         <h5 class="employee-name">${employee.name}</h5>
        //                         <h6 class="employee-position mb-2 text-muted">${employee.getRole()}</h6>
        //                     </div>
        //                     <div class="card-content">
        //                     <ul class="list-group">
        //                     <li class="list-group-item">ID:${employee.getId()}</li>
        //                     <li class="list-group-item">Email:${employee.getEmail()}</li>
        //                     <li class="list-group-item">Email:${employee.getOfficeNumber()}</li>
        //                 </ul>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>
        // `;
//     return employeeString;
//   }

//   if (response[i] instanceof Engineer) {
//     employeeString += `
//           <div class="employee-section container">
//                       <div class="card" style="width: 18rem;">
//                           <div class="card-body">
//                               <div class="card-header">
//                                   <h5 class="employee-name">${
//                                     employee.name
//                                   }</h5>
//                                   <h6 class="employee-position mb-2 text-muted">${employee.getRole()}</h6>
//                               </div>
//                               <div class="card-content">
//                               <ul class="list-group">
//                               <li class="list-group-item">ID:${employee.getId()}</li>
//                               <li class="list-group-item">Role:${employee.getRole()}</li>
//                               <li class="list-group-item">GitHub:${employee.getGitHub()}</li>
//                               <li class="list-group-item">Email:${employee.email()}</li>

//                           </ul>
//                               </div>

//                           </div>
//                       </div>
//                   </div>
//           `;
//   }
//   if (response[i] instanceof Intern) {
    employeeString += `
          <div class="employee-section container">
                      <div class="card" style="width: 18rem;">
                          <div class="card-body">
                              <div class="card-header">
                                  <h5 class="employee-name">${
                                    employee.name
                                  }</h5>
                                  <h6 class="employee-position mb-2 text-muted">${employee.getRole()}</h6>
                              </div>
                              <div class="card-content">
                              <ul class="list-group">
                              <li class="list-group-item">ID:${employee.getId()}</li>
                              <li class="list-group-item">Email:${employee.getEmail()}</li>
                              <li class="list-group-item">Email:${employee.getSchool()}</li>
                          </ul>
                              </div>

                          </div>
                      </div>
                  </div>
          `;
//   }
//   // if manager ....// if intern
// }

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
                ${employeeString}
            </main>
        </div>

    </body>

    </html>`;

// function generateHTML() {
//   //   const employee = getEmployee();
//   //   const html = getEmployee(employeeString);
//   //   fs.writeFile("index.html", html, (err) => {
//   //     if (err) throw err;
//   //     console.log(employee);
//   //   });
//   console.log("There is a manager");

module.exports = generateHTML;
