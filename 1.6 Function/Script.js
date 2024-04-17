/*const s1 = 8
const s2 = 5
const s3 = 10
const s4 = 6

const volumeS1 = s1 * s1 * s1 //512
const volumeS2 = s2 * s2 * s2 // 125
const volumeS3 = s3 * s3 *s3
const volumeS4 = s4*s4*s4

let total = volumeS1 + volumeS2
total = volumeS3 + volumeS4

console.log(total)*/

/*function namafungsi(a, b) {
  console.log(a + " suka " + b);
}

namafungsi("Abel", "Topan");*/

function penjumlahan(a, b) {
  const c = a + b;
  return c;
}

const total = penjumlahan(9, 5) + penjumlahan(8, 7);
console.log(total);

function pengurangan(a, b) {
  return a - b;
}

//Fungsi deklarasi
function perkalian(a, b) {
  return a * b;
}

//fungsi ekspresi
const pembagian = function (a, b) {
  return a / b;
};

let lanjut;

do {
  console.log("-- APLIKASI KALKULATOR SEDERHANA --");
  console.log("Silahkan pilih menu di bawah");
  console.log("Penjumlahan");
  console.log("Pengurangan");
  console.log("Pembagian");
  console.log("Perkalian");
  console.log("Keluar");
  console.log("=================================");

  const menu = prompt("Pilih Menu");

  switch (menu) {
    case "1":
      const a =parseInt (prompt("Masukkan Nilai a :"));
      const b =parseInt (prompt("Masukkan Nilai b :"));
      console.log(penjumlahan(a, b));
      break;

    case "2":
      a = prompt("MAsukkan Nilai a : ");
      b = prompt("Masukkan Nilai b : ");
      console.log(parseInt(pengurangan(a, b)));
      break;

    case "3":
      a = prompt("Masukkan Nilai a : ");
      b = prompt("Masukkan Nilai b : ");
      console.log(parseInt(perkalian(a, b)));
      break;

    case "4":
      a = prompt("Masukkan Nilai a : ");
      b = prompt("Masukkan Nilai b : ");
      console.log(parseFloat(pembagian(a, b)));
      break;

    default:
      alert("Menu yang anda pilih tidak tersedia");
      break;
  }
  lanjut = prompt("Mau piih yang lain?(Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log("Program Selesai")

// arrow function
const modulus = (a, b) => {
  return a % b;
};
