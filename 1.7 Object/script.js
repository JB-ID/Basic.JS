const mahasiswa = {
  //key-value pair (pasangan kunnci nilai)
  nama: "Jabbar",
  nim: "40020519650090",
  umur: 20,
  sapa: function () {
    console.log("Hai, nama saya " + this.nama);
  },
};

console.log(mahasiswa);
console.log(mahasiswa.nim);

//cara menambah properti
mahasiswa["alamat"] = "Rawabuaya GG";
mahasiswa["no.tlp"] = "08297429742";

console.log(typeof mahasiswa);

//untuk menampilkan banyak data
const siswaBLK = [
  {
    nama: "Naufal Z.A",
    alamat: "Kosambi",
    umur: 29,
  },
];

console.log(
  "Hallo, nama saya " +
    siswaBLK[0].nama +
    ", alamat di " +
    siswaBLK[0].alamat +
    ", umur saya " +
    siswaBLK[0].umur
);
