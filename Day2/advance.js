// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

//string letrial
// let name = "nikesh";
// console.log(`my name is ${name}`);

// Destructuring
// const arr = [1, 2, 3];
// const [num1, num2, num3] = arr;
// console.log(num1, num2, num3);

// const obj = {
//   name: "jhon",
//   ph: "9820",
//   id: 1,
// };
// // const { name, ph, id } = obj;
// // console.log(name, ph, id);

// const fun = ({ name, id }) => {
//   console.log(name, id);
// };
// fun(obj);

//spread operator
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

//rest operator
// const obj = {
//   name: "jhon",
//   ph: "9820",
//   id: 1,
//   password: "pas",
// };
// const { password, ...other } = obj;
// console.log(other);

//map
// let arr = [1, 2, 3, 4];
// arr.map((item, index) => {
//   console.log(`item:${item},index:${index}`);
// });

let arr = [
  { id: 1, name: "nikesh", email: "nik@gmail.com", password: "pass" },
  { id: 1, name: "ram", email: "ram@gmail.com", password: "ram" },
  { id: 1, name: "nikesh", email: "nik@gmail.com", password: "pass" },
];
arr.map((item,index)=>{
    console.log(`id: ${item.id}`);
    console.log(`name: ${item.name}`);
    console.log(`email: ${item.email}`);
    console.log(`pass: ${item.pass}`);

})

