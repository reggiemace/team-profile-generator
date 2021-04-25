const Employee = require("../lib/Manager");
// Testing that the Manager object can be instantiated
test("Check to see if new Manager  can be instantiated", () => {
  const m = new Employee("Edith", 10, "edithisamanager@gmail.com", 124);
  expect(typeof m).toBe("object");
  expect(m.name).toBe("Edith");
  expect(m.id).toBe(10);
  expect(m.email).toBe("edithisamanager@gmail.com");
  expect(m.officeNumber).toBe(124);
});
test("Check to see role is Manager", () => {
  const m = new Employee("Edith", 10, "edithisamanager@gmail.com", 124);
  expect(m.getRole(typeof m)).toBe("Manager");
});
test("Check to see if office number has been passed", () => {
  const m = new Employee("Edith", 10, "edithisamanager@gmail.com", 124);
  expect(m.getOfficeNumber(this.getOfficeNumber)).not.toBe(null);
});
