

// soal 1

// class person{
//     #firstname;
//     #lastname;
//     #age ;
//     constructor(){
//         }
//         get name(){
//             return this.#firstname, this.#lastname;
//         }
//         set name(value){
//             if (value.length == 0){


//                 console.log('nama tidak bleh kosong');
//             } else {
//                 this.#firstname = value;
//                 this.#lastname = value;
//             }
//         }
//         set setage(value){
//             if (value < 0){
//                 console.log("umur tidak boleh kurang dari 0");
//             } else {
//                 this.#age = value;
//             }
//         }
//         get getage(){
//             return this.#age;     
//         }
//     }

//     const orang1 = new person("hacyuu","denggol","65");
//     orang1.name = ''
//     orang1.setage = '-9'

//     const karyawan2 = new person("Granola","irul","75");
//     karyawan2.name = ''
//     karyawan2.setage = '-3'

// soal 2
// class PersegiPanjang {
//     #panjang;
//     #lebar;
//     constructor() {
// }

//     get getpanjang() {
//         return this.#panjang;
//     }


//     set setpanjang(panjang) {
//         if (panjang <= 0) {
//             console.log("Panjang tidak boleh 0");
//         }else{
//             this.#panjang = panjang;
//     }
// }

//     get getlebar() {
//         return this.#lebar;
//     }

//     set setlebar(lebar){
//         if(lebar <= 0){
//             console.log("lebar tidak boleh kurang dari 0");
//         }else{
//             this.#lebar = lebar;
//         }
//     }
//     luas () {
//          return ( this.#panjang * this.#lebar);
//     }

//     keliling(){
//       return (2 * (this.#panjang + this.#lebar));
//     }
// }

// let persegiPanjang = new PersegiPanjang();
//     persegiPanjang.setpanjang = 24;
//     persegiPanjang.setlebar = 35;
//     console.log(persegiPanjang.luas());
//     console.log(persegiPanjang.keliling());

// // soal 3
// class RekeningBank {
//     static daftarRekening = []; 

//     #nomorRekening; 
//         constructor() {
//         }


//           set nomorRekening(nomor) {
//             if (RekeningBank.daftarRekening.includes(nomor)) {
//                 throw new Error(Nomor rekening ${nomor} sudah terdaftar.);
//             }
//             this.#nomorRekening = nomor;
//             RekeningBank.daftarRekening.push(nomor);
//         }

//               get nomorRekening() {
//             return this.#nomorRekening;
//         }
// }            


// try {
//     const rekening1 = new RekeningBank("001", 10000);
//     const rekening2 = new RekeningBank("002", 20000);
//     const rekening3 = new RekeningBank("003", 30000);


// rekening1.setorUang(500); 
// rekening1.tarikUang(200); 
// rekening2.setorUang(1000);
// rekening2.tarikUang(3000); 
// rekening3.cekSaldo();     


//     const rekening4 = new RekeningBank("001", 15000); 
// } catch (error) {
//     console.log(error.message);
// }

// soal 4
// class Bank {
//     constructor(namaBank, kantorCabang) {
//         this.namaBank = namaBank;  // Menggunakan "" untuk menandakan properti private
//         this._kantorCabang = kantorCabang;
//     }

//     get namaBank() {
//         return this._namaBank;
//     }

//     set namaBank(namaBankBaru) {
//         this._namaBank = namaBankBaru;
//     }

//     get kantorCabang() {
//         return this._kantorCabang;
//     }

//     set kantorCabang(kantorCabangBaru) {
//         this._kantorCabang = kantorCabangBaru;
//     }

//     menambahkanKantorBank(kantor) {
//         if (this._kantorCabang.includes(kantor)) {
//             console.log(Kantor ${kantor} sudah ada. Tidak dapat menambahkan kantor yang sama.);
//         } else {
//             this._kantorCabang.push(kantor);
//             console.log(Kantor ${kantor} berhasil ditambahkan.);
//         }
//     }

//     hapus(kantor) {
//         this._kantorCabang.splice(kantor, 1);
//     }

//     menampilkanKantorCabang() {
//         console.log(this._kantorCabang);
//     }
// }

// let bankaja = new Bank("Bankaja", ["kantor1", "kantor2", "kantor3"]);
// bankaja.menambahkanKantorBank("kantor4");  
// bankaja.menambahkanKantorBank("kantor2");  
// bankaja.menampilkanKantorCabang(); 

// console.log(bankaja.namaBank);  
// bankaja.namaBank = "BankBaru";  
// console.log(bankaja.namaBank);  

// console.log(bankaja.kantorCabang);  
// bankaja.kantorCabang = ["kantor5", "kantor6"];  
// bankaja.menampilkanKantorCabang();  

// soal 5
// class Book {
//     constructor() {
//       this.title = title;
//       this.author = author;
//       this.year = year;
//     }

//     // Getter
//     get title() {
//       return this._title;
//     }

//     get author() {
//       return this._author;
//     }

//     get year() {
//       return this._year;
//     }

//     // Setter dengan validasi: title tidak boleh kosong
//     set title(newTitle) {
//       if (newTitle === "") {
//         this._title = "Judul tidak diketahui"; // Nilai default jika title kosong
//       } else {
//         this._title = newTitle;
//       }
//     }

//     set author(newAuthor) {
//       this._author = newAuthor;
//     }

//     set year(newYear) {
//       this._year = newYear;
//     }

//     bookDetail() {
//       return Judul buku: ${this.title}, Pembuat buku: ${this.author}, Tahun terbit: ${this.year};
//     }
//   }

//   class Ebook extends Book {
//     constructor(title, author, year, price) {
//       super(title, author, year);
//       this.price = price;
//     }

//     // Getter
//     get price() {
//       return this._price;
//     }

//     // Setter dengan validasi: price harus angka
//     set price(newPrice) {
//       if (isNaN(newPrice)) {
//         this._price = 0; // Nilai default jika bukan angka
//       } else {
//         this._price = newPrice;
//       }
//     }

//     bookDetail() {
//       return ${super.bookDetail()}, Harga: ${this.price};
//     }
//   }

//   // Contoh penggunaan
//   const kentang = new Ebook("KentaangPagar", "Granola", 2018, 90000);
//   console.log(kentang.bookDetail());

//   // Mengubah title dan price menggunakan setter
//   kentang.title = ""; // Title kosong, akan diubah menjadi default
//   kentang.price = "invalidPrice"; // Price bukan angka, akan diubah menjadi 0
//   console.log(kentang.bookDetail());

// soal 6
// class Employee {
//     constructor(nama, gaji) {
//       this.nama = nama;
//       this.gaji = gaji;
//     }


//     get nama() {
//       return this._nama;
//     }

//     get gaji() {
//       return this._gaji;
//     }


//     set nama(newNama) {
//       if (typeof newNama !== 'string') {
//         this._nama = 'Nama tidak valid'; 
//       } else {
//         this._nama = newNama;
//       }
//     }


//     set gaji(newGaji) {
//       if (newGaji <= 0) {
//         this._gaji = 0; 
//       } else {
//         this._gaji = newGaji;
//       }
//     }

//     hitungGajiTahunan() {
//       return ${this.nama} ${this.gaji} * 12;
//     }
//   }

//   class Manager extends Employee {
//     constructor(nama, gaji, departemen) {
//       super(nama, gaji);
//       this.departemen = departemen;
//     }


//     get departemen() {
//       return this._departemen;
//     }


//     set departemen(newDepartemen) {
//       this._departemen = newDepartemen;
//     }

//     hitungGajiTahunan() {
//       return `Nama karyawan: ${this.nama}, Gaji bulanan: ${this.gaji}, Nama manager: ${this.nama}, Departemen: ${this.departemen}, Bonus: 10%, Total gaji: ${
//         this.gaji * 12 + this.gaji / 10
//       }`;
//     }
//   }


//   let kentang = new Manager('Kentang', 6000000, 'Panca indra');
//   console.log(kentang.hitungGajiTahunan());

//   let karyawan2 = new Manager('Pagar', 4000000, 'Google');
//   console.log(karyawan2.hitungGajiTahunan());

//   // Contoh dengan nama bukan string dan gaji tidak valid
//   let invalidEmployee = new Manager(123, -5000, 'IT');
//   console.log(invalidEmployee.hitungGajiTahunan()); 

// soal 7
// class Product {
//     constructor(idProduct, nama, price, qty) {
//       this.idProduct = idProduct;
//       this.nama = nama;
//       this.price = price;
//       this.qty = qty;
//     }


//     get nama() {
//       return this._nama;
//     }

//     get price() {
//       return this._price;
//     }

//     get qty() {
//       return this._qty;
//     }


//     set nama(newNama) {
//       if (typeof newNama !== "string") {
//         this._nama = "Nama tidak valid"; 
//       } else {
//         this._nama = newNama;
//       }
//     }


//     set price(newPrice) {
//       if (isNaN(newPrice)) {
//         this._price = 0; 
//       } else {
//         this._price = Number(newPrice);
//       }
//     }


//     set qty(newQty) {
//       this._qty = newQty;
//     }

//     menghitungTotalHarga(kuantitas) {
//       return this.price * kuantitas;
//     }
//   }

//   class ElectronicProduk extends Product {
//     constructor(idProduct, nama, price, qty, masaGaransi) {
//       super(idProduct, nama, price, qty);
//       this.masaGaransi = masaGaransi;
//     }


//     get masaGaransi() {
//       return this._masaGaransi;
//     }

//     set masaGaransi(newMasaGaransi) {
//       this._masaGaransi = newMasaGaransi;
//     }

//     perhitunganHargaTotal(kuantitas) {
//       let hasilHarga = super.menghitungTotalHarga(kuantitas);
//       return hasilHarga + this.masaGaransi;
//     }
//   }


//   let produk1 = new ElectronicProduk("1", "Sapu", "12000", 3, 2);
//   let produk2 = new ElectronicProduk("2", "Serok", "500000", 2500000, 2, 1);

//   console.log(Nama Produk: ${produk1.nama});
//   console.log(Harga Total untuk ${produk1.qty} unit: Rp${produk1.perhitunganHargaTotal(produk1.qty)} Bergaransi ${produk1.masaGaransi} tahun);

//   console.log(Nama Produk: ${produk2.nama});
//   console.log(Harga Total untuk ${produk2.qty} unit: Rp${produk2.perhitunganHargaTotal(produk2.qty)} Bergaransi ${produk2.masaGaransi} tahun);


//   let produkInvalid = new ElectronicProduk("3", 123, "invalidPrice", 1, 1);
//   console.log(Nama Produk: ${produkInvalid.nama});
//   console.log(Harga Total untuk ${produkInvalid.qty} unit: Rp${produkInvalid.perhitunganHargaTotal(produkInvalid.qty)} Bergaransi ${produkInvalid.masaGaransi} tahun);

// soal 8
// class AkunBank {
//     #noRek;
//     #namaNasabah;
//     #saldo;
//     constructor(noRek, namaNasabah, saldo) {
//         this.#noRek = noRek;
//         this.#namaNasabah = namaNasabah;
//         this.#saldo = saldo;
//     }

//     // Getter untuk noRek
//     get NoRek() {
//         return this.#noRek;
//     }

//     // Getter untuk namaNasabah
//     get NamaNasabah() {
//         return this.#namaNasabah;
//     }

//     // Getter untuk saldo
//     get Saldo() {
//         return this.#saldo;
//     }

//     // Metode untuk menyetor uang
//     menyetor(jumlah) {
//         this.#saldo += jumlah;
//         console.log(`Uang sebesar ${ jumlah } disetorkan.Saldo sekarang: ${ this.Saldo }`);
//     }

//     // Metode untuk menarik uang
//     menarik(jumlah) {
//         if (jumlah > this.Saldo) {
//             console.log(`${this.NamaNasabah} Saldo tidak cukup untuk menarik ${jumlah}. Saldo sekarang: ${this.Saldo}`);
//         } else {
//             this.#saldo -= jumlah;
//             console.log(`Uang sebesar ${jumlah} ditarik. Saldo sekarang: ${this.Saldo}`);
//         }
//     }

//     // Metode untuk mentransfer uang
//     transfer(jumlah) {
//         if (jumlah > this.Saldo) {
//             console.log(`Saldo tidak cukup untuk di transfer sebanyak ${jumlah}. Saldo anda sekarang: ${this.Saldo}`);
//         } else {
//             this.#saldo -= jumlah;
//             console.log(`Uang sebesar ${jumlah} telah ditransfer! Saldo anda sekarang: ${this.Saldo}`);
//         }
//     }
// }

// const rekening = new AkunBank(212, "Denggol", 2000000);
// console.log(rekening.NamaNasabah);
// console.log(rekening.NoRek);
// console.log(rekening.Saldo);

// rekening.menyetor(500);
// rekening.menarik(1000000);
// rekening.transfer(100);