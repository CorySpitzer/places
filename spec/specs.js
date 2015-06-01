describe('findReplace', function() {
  it('should search a given string for a word and replace it with a different word', function() {
    expect(findReplace("hey jude", "hey", "damn it")).to.eq("damn it jude");
  });
});
