import { getAllKeys, fromListToObject } from "./../src/challenges.js"

describe('Challenges', function() {

  const obj = {
    name: "Sam",
    age: 25,
    hasPets: true
  };

  it("should return an array of all the input object's keys", function() {
    expect(getAllKeys(obj)).toEqual(['name', 'age', 'hasPets']);
  });

  const arr = [
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
  ];

  it("should take in an array of arrays and return an object with each pair of elements in the array as a key-value pair", function() {
    expect(fromListToObject(arr)).toEqual({make : 'Ford', model : 'Mustang', year : 1964});
  });
});
