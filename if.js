var total = 284;

if (total >= 100) {
  total *= .8;
}

console.log('your total is: $' + total.toFixed(2));

if (1 + 1 === 2) {
  console.log('Arithmetic is the best');
}

if (1 + 1 !== 2 ) {
  console.log('Math is broken.');
}

if (1 + 1 === 2) {
  console.log('Arithmetic is the best');
} else {
  console.log('Math is broken.');
}

if (2 > 1) {
  console.log('a');
} else {
  console.log('b');
}

if (2 > 1 && 5 <= 3) {
  console.log('c');
} else {
  console.log('d');
}
