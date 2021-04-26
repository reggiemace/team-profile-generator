const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./lib/generateHTML");

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
        {
          type: "checkbox",
          name: "addEmployee",
          message: "Would you like to add another employee",
          choices: ["yes", "no"],
          validate: function (choices) {
            if (choices) {
              return true;
            } else {
              return "Please select an option to continue";
            }
          },
        },
      ])
      .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager);
      });
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
        const intern = new Engineer(name, id, email, school);
        console.log(intern);
      });
  };
  createManger();
  // createEngineer();
  // createIntern();
};
// TODO: Create a function to write HTML file

// function init() {
//   inquirer.prompt().then((response) => {
//     const html = generateHTML(response);
//     console.log(html);
//     writeToFile("index.html", index);
//   });
// }

menu();
