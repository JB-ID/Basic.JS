const nama = prompt("Silahkan masukkan Nama anda!");
console.log("Nama anda: " + nama);
const Gol = prompt("Masukkan Golongan Anda!");
console.log("Golongan: " + Gol);
let gaji_gol;
switch (Gol) {
  case "A":
  case "a":
    gaji_gol = 6000;
    break;
  case "B":
  case "b":
    gaji_gol = 7000;
    break;
  case "C":
  case "c":
    gaji_gol = 8000;
    break;
  default:
    gaji_gol = 10000;
    break;
}
const Jumlah = prompt("Jumlah jam kerja");
console.log("Jumlah jam kerja: " + Jumlah);

let lembur;
if (Jumlah > 48) {
  lembur = (Jumlah - 48) * 5000;
} else {
  lembur = 0;
}

let gaji = gaji_gol * Jumlah + lembur;
console.log("");
console.log(nama + " menerima gaji sebesar " + gaji + " per minggu.");
