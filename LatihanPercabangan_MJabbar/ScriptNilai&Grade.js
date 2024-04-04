const Nilai_ = prompt("Masukkan Nilai Anda");
let grade = "";

if (Nilai_ > 84) {
  grade = "A";
} else if (Nilai_ > 74) {
  grade = "B";
} else if (Nilai_ > 64) {
  grade = "C";
} else if (Nilai_ > 54) {
  grade = "D";
} else {
  grade = "E";
}
console.log("Nilai anda: " + Nilai_ + ", Grade anda: " + grade);
