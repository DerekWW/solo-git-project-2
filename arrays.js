var myArray = ['Elie', 'Janey', 'Matt', 'Parker', 'Tim'];

console.log(myArray);

var names = ['Nala', 'Merlin','Snowball', 'George'];

console.log(names);

console.log(myArray[100]);
console.log(myArray[-1]);

var books = ['JavaScript: The Good Parts', 'Eloquent JS', 'You Dont Know Js'];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  console.log(book);
}
var nums = [1, 2, 3, 4];

for (var i = 0; i < nums.length; i++) {
  nums[i] *= 2
}
console.log(nums);
