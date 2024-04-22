let lanjut_Boss;

do {
  console.log(
    "==========================================================" +
      "\n" +
      "kode barang" +
      "\t\t\t" +
      "nama produk" +
      "\t\t\t" +
      "harga" +
      "\t\t" +
      "stok" +
      "\n" +
      "========================================================="
  );

  const jualan = {
    kode_brg: prompt("Masukkan kode barang"),
    nama_brg: prompt("Masukkan nama barang"),
    harga_brg: prompt("Masukkan harga barang"),
    stok_brg: prompt("Jumlah stock barang"),
  };

  console.log(
    jualan.kode_brg +
      "\t\t\t\t" +
      jualan.nama_brg +
      "\t\t\t\t" +
      jualan.harga_brg +
      "\t\t" +
      jualan.stok_brg
  );

  lanjut_Boss = prompt("Apakah mau dilanjut boss? (Y/T)");
} while (lanjut_Boss === "Y" || lanjut_Boss === "y");
console.log("==========================================================");

console.log("Input selesai");
