document.getElementById("demo").innerHTML = "Belajar Javascript DOM";
document.getElementById("demo").style.color = "blue";
//contoh append child
let main = document.getElementById("div");
let para = document.createElement("p");
let para_txt = document.createTextNode("Paragraf ketiga(baru)");
para.appendChild(para_txt);
main.appendChild(para);
//contoh insert before
let para_first = document.createElement("h3");
let pfirst_txt = document.createTextNode("Title paragraf");
let para1 = document.getElementById("p1");
para_first.appendChild(pfirst_txt);
main.insertBefore(para_first, para1);
//contoh remove child
let para2 = document.getElementById("p2");
main.removeChild(para2);
//contoh replace child
let pnew = document.createElement("p");
let pnew_txt = document.createTextNode("Ini Paragraf Baru");
pnew.appendChild(pnew_txt);
main.replaceChild(pnew, para1);
//contoh event click
function tampil() {
   let txtnama = document.getElementById("txt_nama").value;
   document.getElementById("tampildata").innerHTML = txtnama;
}
let btntampil = document.getElementById("btntampil");
// btntampil.onclick = tampil;
btntampil.addEventListener("click", tampil);
//contoh event onmouseover
let tampildata = document.getElementById("tampildata");
tampildata.addEventListener("mouseover", function () {
   tampildata.setAttribute("class", "p-4 bg-primary text-white");
   tampildata.style.fontSize = "30px";
});
//contoh onchange
let txtnilai1 = document.getElementById("nilai1");
let txtnilai = document.getElementById("nilai2");
let btnsubmit = document.querySelector("#btnsubmit");
function proses() {
   let txtnama = document.getElementById("txt_nama").value;
   document.getElementById("tampildata").innerHTML = txtnama;

   let hasil = parseInt(txtnilai1.value) + parseInt(txtnilai.value);
   document.getElementById("tampilnilai").innerHTML = "Hasilnya: " + hasil;
}

console.log(main.firstChild.nodeName);
console.log(main.lastChild.nodeName);
let p = document.getElementById("plast");
console.log(p.parentNode.nodeName);
