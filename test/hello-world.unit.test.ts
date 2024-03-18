const addTwoNumbers = (a: number, b: number) => a + b;

it("Should add two numbers", () => {
  expect(addTwoNumbers(1, 2)).toBe(3);
});
