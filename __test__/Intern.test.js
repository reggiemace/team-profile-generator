const Employee = require("../lib/Intern");
// Testing that the Manager object can be instantiated
test("Check to see if new Intern  can be instantiated", () => {
  const i = new Employee("mary", 99, "maryisanintern@gmail.com", "JHU");
  expect(typeof i).toBe("object");
  expect(i.name).toBe("mary");
  expect(i.id).toBe(99);
  expect(i.email).toBe("maryisanintern@gmail.com");
  expect(i.school).toBe("JHU");
});
test("Check to see role is Intern", () => {
  const i = new Employee("mary", 99, "maryisanintern@gmail.com", "JHU");
  expect(i.getRole(typeof i)).toBe("Intern");
});
test("Check to see if School has been passed", () => {
  const i = new Employee("mary", 99, "maryisanintern@gmail.com", "JHU");
  expect(i.getSchool(this.getSchool)).not.toBe(null);
});
