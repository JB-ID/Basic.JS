let a = 3;
let b = 2;

const z = a + b;

console.log(z);

a = 50;
b = 5;

c = a * b;

console.log(c);
// ---------------------------------TUGAS----------------------------------

// Tambah
a = 12;
j = 20;

k = a + j;

console.log(k);
// Kurang
a = 22;
b = 4;

l = a - b;

console.log(l);
// kali
a = 9;
b = 9;

v = a * b;

console.log(v);
// bagi
a = 25;
b = 5;

m = a / b;

console.log(m);
// ------------------------------------------------------------
// Operator augmented assignment

x = 5;
y = 5;

console.log((x += y));
console.log((x -= y));
console.log((x *= y));

// -----------------------------------------------------------
// Operator unary

x = 4;
y = -5;

console.log((x += y));
console.log((x -= y));
console.log(x++);
console.log(y--);

// --------------------------------------------------------------

// Operator perbandingan

// Operator string
const p1 = "Hallo";
const p2 = "guys";
// tanda "+" untuk menyatukan 2 kata/kalimat, untuk spasi (+""+)
console.log(p1 + " " + p2);

// Operator ternary
const ganjilgenap = 1 % 2 === 0 ? "Ini bilangan genap" : "Ini bilangan ganjil";

console.log(ganjilgenap);
