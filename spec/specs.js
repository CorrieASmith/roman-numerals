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

describe('romanNumeralC', function() {
  it("takes roman numeral C and adds it to numbers 100-499", function() {
    expect(romanNumeralC(100)).to.eql(["C"])
  });
});

describe('romanNumeralD', function() {
  it("takes roman numeral D and adds it to numbers 500-999", function() {
    expect(romanNumeralD(500)).to.eql(["D"])
  });
});
