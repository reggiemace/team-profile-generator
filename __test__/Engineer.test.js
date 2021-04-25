const Employee = require("../lib/Engineer");
// Testing that the Engineer object can be instantiated
test("Check to see if new Engineer  can be instantiated", () => {
  const en = new Employee(
    "jerry",
    10,
    "jerryisanengineer@gmail.com",
    "jerryMoore"
  );
  expect(typeof en).toBe("object");
  expect(en.name).toBe("jerry");
  expect(en.id).toBe(10);
  expect(en.email).toBe("jerryisanengineer@gmail.com");
  expect(en.github).toBe("jerryMoore");
});
test("Check to see role is Engineer", () => {
  const en = new Employee("jerry", 10, "jerryisanengineer@gmail.com");
  expect(en.getRole(typeof en)).toBe("Engineer");
});
test("Check to see if github has been passed has been passed", () => {
  const en = new Employee(
    "jerry",
    10,
    "jerryisanengineer@gmail.com",
    "jerryMoore"
  );
  expect(en.getGitHub).not.toBe(null);
});
