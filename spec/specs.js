describe('countUp', function() {
  it("takes one number to count to and what multiple to use to get there", function () {
    expect(countUp(5,1)).to.eql([1,2,3,4,5])
  });
});
