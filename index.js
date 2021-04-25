const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

menu = () => {
  createManger = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the manager name",
          // validate (go to inquire doc)
        },
        {
          type: "input",
          name: "id",
          message: "What is the team manager's id?",
          // validate (go to inquire doc)
        },
        {
          type: "input",
          name: "email",
          message: "What is the team manager's email?",
          // validate (go to inquire doc)
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the team manager's office number?",
          // validate (go to inquire doc)
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
          // validate (go to inquire doc)
        },
        {
          type: "input",
          name: "id",
          message: "What is engineer's id?",
          // validate (go to inquire doc)
        },
        {
          type: "input",
          name: "email",
          message: "What is the team engineer's email?",
          // validate (go to inquire doc)
        },
        {
          type: "input",
          name: "github",
          message: "What is the team engineer's github?",
          // validate (go to inquire doc)
        },
      ])
      .then(({ name, id, email, officeNumber }) => {
        const engineer = new Engineer(name, id, email, github);
        console.log(engineer);
      });
  };
  createManger();
  //createEngineer();
};

menu();
