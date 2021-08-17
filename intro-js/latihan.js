function ceknilai(nama, nilai) {
   let text;
   if (nilai > 90) {
      text = "A";
   } else if (nilai > 75) {
      text = "B";
   } else if (nilai > 60) {
      text = "C";
   } else {
      text = "D";
   }
   return nama + ", nilainya:" + text;
}

let nilai = 50;
//deklarasi function
function message(nama, keterangan = "berhasil") {
   let siswa = ceknilai(nama, nilai);
   let siswa2 = ceknilai("Rani", 90);
   console.log(" hasil:" + siswa);
   console.log("siswa2: " + siswa2 + keterangan);
}
//cara panggilnya
//console.log("Rani mendapat nilai : " + ceknilai(65));
message("Ahmad", " Semangat Belajar!!");

const tipepelatihan = "frontend";
let nama = " Ana";
let daftar = "frontend";
if (daftar == tipepelatihan) {
   console.log(nama + " boleh daftar");
} else {
   console.log("tidak boleh!!");
}
