let user_all = [
   { id: 1, nama: "ANA", nilai: 90 },
   { id: 2, nama: "NIA", nilai: 70 },
   { id: 3, nama: "BUDI", nilai: 50 },
];

let user = user_all.find((item) => {
   if (item.nilai < 80) {
      return item.nama;
   }
});
//console.log(user);

let data = user_all.filter((item) => item.nilai < 80);
//console.log("filter: " + data);

let datamap = user_all.map((item) => {
   return item.nilai;
});
console.log(datamap);
console.log(datamap.sort());
let reduce = datamap.reduce((sum, current) => {
   return sum + current;
}, 0);
console.log(reduce);
