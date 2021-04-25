const Employee = require("../lib/Employee");

test("Check to see if new new Employee  can be instantiated", () => {
  const e = new Employee("Reggie", 1, "reginaldmace36@gmail.com");
  expect(typeof e).toBe("object");
  expect(e.name).toBe("Reggie");
  expect(e.id).toBe(1);
  expect(e.email).toBe("reginaldmace36@gmail.com");
});
test("Check to see that a passed name value is returned", () => {
  const e = new Employee("Reggie", 1, "reginaldmace36@gmail.com");
  expect(e.getName(this.name)).toBe("Reggie");
});
test("Check to see that a passed id value is passed", () => {
  const e = new Employee("Reggie", 1, "reginaldmace36@gmail.com");
  expect(e.getId(this.id)).toBe(1);
});
test("Check to see that a passed email value is passed", () => {
  const e = new Employee("Reggie", 1, "reginaldmace36@gmail.com");
  expect(e.getEmail(this.email)).toBe("reginaldmace36@gmail.com");
});
test("Check to see role is Employee", () => {
  const e = new Employee("Reggie", 1, "reginaldmace36@gmail.com");
  expect(e.getRole(this.id)).toBe("Employee");
});
