/* If Statement
const Total_Belanja = 51000;
if (Total_Belanja > 50000) {
  console.log("Selamat Anda Bisa Tebus Murah");
}

// If.. else statement
const Total=prompt("Masukkan total belanja");

if (Total_Belanja > 50000) {
  console.log("Selamat Anda Mendapatkan Piring Cantik");
} else {
  console.log("Mohon Maaf Anda Belum Beruntung");
}
console.log("Terima kasih sudah berbelanja");*/

/* Login
const password = "maungapain";

if (password === "maungapain") {
  console.log("Silahkan masuk, gan!");
} else {
  console.log("PASSWORD SALAH");
}

// if else.. if else statement

const Nilai = prompt("Masukkan Nilai Anda");

if (Nilai > 79) {
  console.log("Nilai anda baik");
} else if (Nilai > 69) {
  console.log("Nilai anda cukup");
} else if (Nilai > 59) {
  console.log("Nilai anda buruk");
} else {
  console.log("Anda tolol");
} */

// switch statement

const warna = "merah";
let pesan = "";

switch ("merah") {
  case "merah":
    pesan = "Anda memilih warna merah";
    break;

  case "biru":
    pesan = "anda memilih warna biru";
    break;

  case "oren":
    pesan = "anda memilih warna oren";
    break;

  default:
    pesan = "Warna yang anda pilih tidak ada";
}
console.log(pesan)