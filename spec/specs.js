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
