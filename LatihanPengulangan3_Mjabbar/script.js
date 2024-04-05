let anyam = prompt("Jumlah anak ayam");
console.log("Anak ayam turun " + anyam);


while (anyam > 0) {
  if (anyam===1){
    console.log(
      "Anak ayam turun 1, mati satu tinggal induknya."
    )}
  else {
    console.log("Anak ayam turun "+anyam+ ","+" mati satu tinggal " + (anyam-1))+ "."
  }
  anyam--
}
