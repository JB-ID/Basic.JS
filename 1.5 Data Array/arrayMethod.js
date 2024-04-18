//Array method

const arr= [3,5,7,9,11]

// length = menampilkan isi dari array
console.log(arr.length) // 5

// join = menggabungkan isi array menjadi sebuah string
const word = ['K','A','T','A','K']
const word2= ["Selamat", "Datang", "di", "BLK"]
console.log(word.join(""))
console.log(word2.join(""))

// push = menambahkan elemen array di bagian terakhir
arr.push(13, 15, 17)
word.push("B", "E", "R", "A", "C", "U", "N")
word2.push("Karawang")

console.log(arr)
console.log(word.join("")+ "\n" + word2.join(" "))

//pop = menghapus elemen terakhir dari array
arr.pop()
console.log(arr)

// unshift = menambahkan elemen di awal array
//[1,3,5,7,9,11,13,15]
arr.unshift(1)
console.log(arr)

// shift = menghapus elemen pertama di array
word.shift()
console.log(word)