// const obj = {
//   name: "Jhon",
//   age: 36,
//   arr: [1, 3, "nik"],
// };
// obj.email = "jhon@gmail.com";
// obj.name = "dev";

// console.log(obj.name);
// console.log(obj.arr[2]);

//Dom
// const head = document.querySelector(".text");

// btn1.addEventListener("click", () => {
//   box.style.marginLeft = "10rem";
// });
// btn2.addEventListener("click", () => {
//   box.style.marginLeft = "0rem";
// });

// // //arrow
// // const myfun = (a) => {};
// // //callback--fun passed as parameter
// // myfun(clicked);
// const h1 = document.querySelector(".text");
// console.log((h1.innerHTML = "hi roshan"));
// //loop for all selector

const btn1 = document.querySelector(".add");
const btn2 = document.querySelector(".remove");
const box = document.querySelector(".box");
btn1.addEventListener("click", () => {
  btn1.style.display = "none";
  btn2.style.display = "block";
  box.style.display = "block";
});
btn2.addEventListener("click", () => {
  btn2.style.display = "none";
  btn1.style.display = "block";
  box.style.display = "none";
});
