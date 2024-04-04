const tahun_lahir = prompt("Masukkan tahun lahir anda");
let tipe = "";

if (tahun_lahir < 1945) {
  tipe = "Buyut";
} else if (tahun_lahir < 1966) {
  tipe = "Baby Boomer";
} else if (tahun_lahir < 1980) {
  tipe = "Gen X";
} else if (tahun_lahir < 1995) {
  tipe = "Gen Y";
} else if (tahun_lahir < 2016) {
  tipe = "Gen Z";
} else {
  tipe = "Genangan Banjir";
}

console.log("Tahun lahir anda: " + tahun_lahir + "  Anda termasuk: " + tipe);
