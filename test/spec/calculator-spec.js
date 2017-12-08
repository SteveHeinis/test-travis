var calculator = require("../calculator");

describe("multiply", function () {
  it("should multiply 2 by 3", function () {
    var twobythree = calculator.multiply(2, 3);
    expect(twobythree).toBe(6);
  });
});  