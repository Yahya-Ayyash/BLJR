//! Soal loop 1
// Dengan menggunakan for loop, log di console sebuah kalimat "Belajar hal baru itu menyenangkan!" sebanyak 7 kali.
for (let i = 0; i < 7; i++) {
    console.log("Belajar hal baru itu menyenangkan!");
}

//! Soal loop 2
// Diketahui sebuah array:
const numbers = [0, 5, 10, 15, 20, 25];
// Tulis baris kode sebuah dengan for loop yang akan menulis di console, secara berurutan:
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

//! Soal loop 3
// disediakan sebuah array sebagai berikut:
const RealMadrid = [
    "Andriy Lunin",
    "Dani Carvajal",
    "Antonio Rüdiger",
    "Nacho Fernández",
    "Ferland Mendy",
    "Toni Kroos",
    "Eduardo Camavinga",
    "Federico Valverde",
    "Jude Bellingham",
    "Vinícius Júnior",
    "Rodrygo Goes",
];
// Gunakan for..of , dan log di console setiap nama pemain dalam kondisi UPPERCASE (huruf besar semua)
for (const player of RealMadrid) {
    console.log(player.toUpperCase());
}

//! Soal loop 4
// diketahui sebuah array:
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lakukan looping dengan menggunakan for...of loop dan console.log hasil pangkat 2 dari masing-masing angka di dalam array tersebut
for (const num of numbers2) {
    console.log(num ** 2);
}

//! Soal basic function
// Buatkan sebuah function bernama printHeart yang akan mencetak "<3" di dalam konsol browser!
function printHeart() {
    console.log("<3");
}
printHeart();

//! Soal function with argument
// Buatkan sebuah function yang menerima string sebagai argument. Berikan function tersebut nama "marah".
// Lalu ketika fungsi marah dijalankan akan melakukan console.log sebanyak tiga kali
// Hasil dari console.log harus membuat string nya huruf besar semua
function marah(kalimat) {
    for (let i = 0; i < 3; i++) {
        console.log(kalimat.toUpperCase());
    }
}
marah("aku marah sama kamu!");

//! Soal Return Value 1
// Buatkan sebuah function sederhana perkalian yang menerima dua arguments berupa angka
// lalu return hasil kali dua arguments tersebut
function perkalian(a, b) {
    return a * b;
}
// lalu buat sebuah variabel bernama hasilKali yang berisikan function di atas
const hasilKali = perkalian(3, 4);
// console.log variabel tersebut!
console.log(hasilKali);

//! Soal return value 2
// Buatkan sebuah function bernama apakahGerah yang menerima argument bernama "temperature" yang menerima angka
// Jika temperature lebih besar dari 30, return true
// Selainnya, return false
function apakahGerah(temperature) {
    return temperature > 30;
}
console.log(apakahGerah(32)); // true
console.log(apakahGerah(28)); // false

//! Soal kombinasi array dan function
// Tuliskan sebuah function bernama lastElement yang menerima sebuah argument dalam bentuk array. 
// Fungsi tersebut mengembalikan element terakhir dari array yang dimasukkan ke argument tersebut.
// Jika array kosong, function mengembalikan null
function lastElement(array) {
    return array.length === 0 ? null : array[array.length - 1];
}
console.log(lastElement([3, 5, 7])); // 7
console.log(lastElement([1])); // 1
console.log(lastElement([])); // null

//! Soal kombinasi array dan function
// Buatkan sebuah function bernama multiplyAll yang menerima sebuah array berisikan angka sebagai argument
// tugas dari function ini adalah return hasil perkalian dari semua angka di dalam array tesebut
function multiplyAll(array) {
    return array.reduce((acc, num) => acc * num, 1);
}
console.log(multiplyAll([1, 2, 3, 4])); // 24

//! Soal function with multiple arguments
// Buatkan sebuah function dengan nama syaratLulus yang menerima dua arguments berupa angka
// Jika kedua angka tersebut bernilai 100, maka cetak di console "Anda Lulus"
// jika kedua angka tersebut bernilai selain 100 maka cetak di console "Anda tidak lulus"
function syaratLulus(nilai1, nilai2) {
    if (nilai1 === 100 && nilai2 === 100) {
        console.log("Anda Lulus");
    } else {
        console.log("Anda tidak lulus");
    }
}
syaratLulus(100, 100); // "Anda Lulus"
syaratLulus(90, 100); // "Anda tidak lulus"

//! Soal Function Expression
// Buatkan sebuah Function Expression kedalam sebuah variabel bernama square
// function tersebut me-return hasil pangkat dari angka yang di-input
const square = function (num) {
    return num * num;
}
console.log(square(4)); // 16
console.log(square(3)); // 9

//! Soal arrow function
// Dengan menggunakan arrow function, buatkan function bernama "sapa".
// Menerima satu parameter, yaitu nama orang, yang akan dipanggil ke dalam function.
// Dan akan mengembalikan sebuah string gabungan yang akan menunjukkan hasil "Assalamu'alaikum nama"
// contoh sapa("Antoni") hasilnya "Assalamu'alaikum Antoni!"
const sapa = (nama) => `Assalamu'alaikum ${nama}!`;
console.log(sapa("Antoni")); // "Assalamu'alaikum Antoni!"

//! Soal Methods
// buatkan sebuah object bernama persegi
// di dalam object persegi buatkan 2 fungsi untuk mencari keliling dan luas dari persegi tersebut
const persegi = {
    keliling: function (sisi) {
        console.log(`Keliling persegi adalah ${4 * sisi}cm.`);
    },
    luas: function (sisi) {
        console.log(`Luas persegi dengan sisi ${sisi} cm adalah ${sisi * sisi} cm persegi.`);
    }
}

persegi.keliling(8); // "Keliling persegi adalah 32cm."
persegi.luas(10); // "Luas persegi dengan sisi 10 cm adalah 100 cm persegi."