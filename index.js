const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
//const generateHTML = require("./lib/generateHTML");
//const getEmployee = require("./lib/generateHTML");

let managerString = " ";
let engineerString = " ";
let internString = " ";

menu = () => {
  createManger = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the manager name",
          validate: function (name) {
            if (name) {
              return true;
            } else {
              return "Employee name can't be empty";
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the team manager's id?",
          validate: function (id) {
            if (!id.isNaN) {
              return true;
            } else {
              return "Please assign a number id for this employee";
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the team manager's email?",
          validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

            if (valid) {
              return true;
            } else {
              return "Please enter a valid email address";
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the team manager's office number?",
          validate: function (officeNumber) {
            if (officeNumber) {
              return true;
            } else {
              return "Employee must be assigned an office number";
            }
          },
        },
      ])
      .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        console.info(manager);
        managerString += `
        <div class="employee-section">
                    <div class="card my-card" style="width: 18rem;" >
                        <div class="card-body">
                            <div class="card-header">
                                <h5 class="employee-name">${manager.name}</h5>
                                <h6 class="manager-position mb-2 text-muted">${manager.getRole()}</h6>
                            </div>
                            <div class="card-content">
                            <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${
                              manager.email
                            }">${manager.email}</a></li>
                            <li class="list-group-item">Office Number: ${
                              manager.officeNumber
                            }</li>
                        </ul>
                            </div>

                        </div>
                    </div>
                </div>
        `;
        newPrompt();
      });
  };

  newPrompt = async () => {
    const answer = await inquirer.prompt({
      type: "list",
      message: "Would you like to add an employee",
      choices: ["yes", "no"],
      name: "choice",
    });
    // if  eng -> create engineer
    if (answer.choice == "yes") {
      addEmployee();
    } else if (answer.choice == "no") {
      generateHTML();
    }
  };
  addEmployee = async () => {
    const answer = await inquirer.prompt({
      type: "list",
      message: "What type of employee would you like to add",
      choices: ["Engineer", "Intern"],
      name: "choice",
    });
    if (answer.choice == "Engineer") {
      createEngineer();
    } else if (answer.choice == "Intern") {
      createIntern();
    }
  };

  createEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the engineer's name",
          validate: function (name) {
            if (name) {
              return true;
            } else {
              return "Employee name can't be empty";
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is engineer's id?",
          validate: function (id) {
            if (!id.isNaN) {
              return true;
            } else {
              return "Please assign a number id for this employee";
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the team engineer's email?",
          validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

            if (valid) {
              return true;
            } else {
              return "Please enter a valid email address";
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the team engineer's github?",
          validate: function (name) {
            if (name) {
              return true;
            } else {
              return "Employee gitHub can't be empty";
            }
          },
        },
      ])
      .then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github);
        console.log(engineer);
        engineerString += `
        <div class="employee-section">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header">
                                <h5 class="employee-name">${engineer.name}</h5>
                                <h6 class="engineer-position mb-2 text-muted">${engineer.getRole()}</h6>
                            </div>
                            <div class="card-content">
                            <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${
                              engineer.email
                            }">${engineer.email}</a></li>
                            <li class="list-group-item">GitHub:<a href="https://github.com/${
                              engineer.github
                            }"></a></li>
                        </ul>
                            </div>

                        </div>
                    </div>
                </div>
        `;

        newPrompt();
      });
  };
  createIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the intern's name",
          validate: function (name) {
            if (name) {
              return true;
            } else {
              return "Employee name can't be empty";
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is intern's id?",
          validate: function (id) {
            if (!id.isNaN) {
              return true;
            } else {
              return "Please assign a number id for this employee";
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email?",
          validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

            if (valid) {
              return true;
            } else {
              return "Please enter a valid email address";
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What school is the intern enrolled",
          validate: function (name) {
            if (name) {
              return true;
            } else {
              return "Intern's school can't be empty";
            }
          },
        },
      ])
      .then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school);
        console.log(intern);
        internString += `
        <div class="employee-section container">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header">
                                <h5 class="employee-name">${intern.name}</h5>
                                <h6 class="intern-position mb-2 text-muted">${intern.getRole()}</h6>
                            </div>
                            <div class="card-content">
                            <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${
                              intern.email
                            }>${intern.email}"</a>${intern.email}</li>
                            <li class="list-group-item">School: ${
                              intern.school
                            }</li>
                        </ul>
                            </div>

                        </div>
                    </div>
                </div>
        `;
        newPrompt();
      });
  };
  createManger();
};
function generateHTML() {
  // const print = managerString + engineerString + internString; // make await if dnt work
  // const oldList = fs.readFileSync("employeeList.html");
  // print += oldList;
  const html = `<!DOCTYPE html>
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
            <main class="employee-list">
            ${managerString}
            ${engineerString}
            ${internString}
         </main>
        </div>

    </body>

    </html>`;

  fs.writeFile("index.html", html, (err) => {
    if (err) throw err;
  });
}

menu();
// make sure emp exist ..and write to old list file
