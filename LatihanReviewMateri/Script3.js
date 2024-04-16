let x = prompt("Masukkan angka");
console.log("Berikut tabel perkalian " + x);
let hasil = " ";
for (let kali = 1; kali <= 10; kali++) {
  hasil = x * kali;
  console.log(x + " x " + kali + "=" + hasil);
}
