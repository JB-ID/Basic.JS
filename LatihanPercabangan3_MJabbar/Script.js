const Total_Blj = prompt("Masukkan total belanja anda");
let promo1 = 0.1;
let promo2 = 0.2;
let promo3 = 0.3;

if (Total_Blj < 100000) {
  console.log(
    "Total belanja = Rp." +
      Total_Blj +
      " Maaf anda tidak mendapatkan potongan harga"
  );
} else if (Total_Blj < 500001) {
  console.log(
    "Total belanja = Rp." +
      Total_Blj +
      " Selamat! Anda mendapatkan potongan harga 10% " +
      "Total bayar = Rp." +
      (Total_Blj - Total_Blj * promo1)
  );
} else if (Total_Blj < 1000001) {
  console.log(
    "Total belanja = Rp." +
      Total_Blj +
      " Selamat! Anda mendapatkan potongan harga 20% " +
      "Total bayar = Rp." +
      (Total_Blj - Total_Blj * promo2)
  );
} else {
  console.log(
    "Total belanja = Rp." +
      Total_Blj +
      " Selamat Anda mendapatkan potongan harga 30% " +
      "Total bayar = Rp." +
      (Total_Blj - Total_Blj * promo3)
  );
}
