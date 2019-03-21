import { getAllKeys } from "./../src/challenges.js"

describe('Challenges', function() {

  const obj = {
    name: "Sam",
    age: 25,
    hasPets: true
  };

  it("should return an array of all the input object's keys", function() {
    expect(getAllKeys(obj)).toEqual(['name', 'age', 'hasPets']);
  });
});
