const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];
// 2 funtion
const gabung = [...hewanBuas, ...hewanJinak];
// func 1
const animal = () => console.log(gabung);
// func 2
const foodAnimals = () => {
  let timun,wortel,kangkung;
  [timun,wortel,kangkung] = hewanJinak;
  console.log("timun : " + timun);
  console.log("wortel : " + wortel);
  console.log("kangkung : " + kangkung);
};
foodAnimals();
//cetak
const cetak = new Promise((a) => {
  setTimeout(() => {
    a(animal());
  }, 5000);
});

// const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
// const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

// const makananKesukaan = ["Ikan", "Wortel", "Biji-bijian"];
// let tamp = "";
// const data = () => [...hewanBuas, ...hewanJinak];


// const pemetaanHewan =  (hewan, makanan) =>{
//     const hasilPemetaan = {};

//     for (let i = 0; i < hewan.length; i++) {
//       hasilPemetaan[hewan[i]] = makanan[i];
//     }

//     return hasilPemetaan;
//   }

// console.log(pemetaanHewan(hewanJinak,makananKesukaan));
// setTimeout(() => {
//     console.log(data());
// }, 5000);