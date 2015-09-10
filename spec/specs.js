describe('countUp', function() {
  it("takes one number to count to and what multiple to use to get there", function () {
    expect(countUp(1,5)).to.eql(1,2,3,4,5)
  });
});
