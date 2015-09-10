describe('romanNumeralI', function() {
  it("takes roman numeral I and adds it to numbers 1-4", function() {
    expect(romanNumeralI(1)).to.eql(["I"])
  });
});

describe('romanNumeralV', function() {
  it("takes roman numeral V and adds it to numbers 5-9", function() {
    expect(romanNumeralV(5)).to.eql(["V"])
  });
});

describe('romanNumeralX', function() {
  it("takes roman numeral X and adds it to numbers 10-19", function() {
    expect(romanNumeralX(10)).to.eql(["X"])
  });
});

describe('romanNumeralL', function() {
  it("takes roman numeral L and adds it to numbers 50-99", function() {
    expect(romanNumeralL(50)).to.eql(["L"])
  });
});
