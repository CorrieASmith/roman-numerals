describe('romanNumeral', function() {
  it("takes a number between 1 and 3999 and converts it into roman numerals", function() {
    expect(romanNumeral(1)).to.eql(["I"])
  });
});
