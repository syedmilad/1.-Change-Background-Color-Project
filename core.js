function clickFunction() {
  let bg = document.getElementById("background");
  let colors = ["green", "blue", "red", "purple"];
  const colorIndex = parseInt(Math.random() * colors.length);
  bg.style.backgroundColor = colors[colorIndex];
}
// change background color there second way to make this program--

// let bg = document.getElementById('background');
// let colors = ["red", "green", "blue", "yellow"];
// function clickFunction()
//  {
//     const colorIndex = parseInt(Math.random()*colors.length);
//     bg.style.backgroundColor = colors[colorIndex];
//  }

// ----------------------------------------------------------------------
// function average (x, y){
//     return x + y / 2;
// }
//  const avg =  average(2);
//  console.log(avg)


//  function tripple (x)  {
//       return x + x + x;
//   }
//  let trp = tripple(2,2,2);
//  console.log(trp)
  

//  function even (x) {
//      return x % 2 == 0;
//  }
//  let evn = even(-10)
//  console.log(evn)

// const arry = {
//     name: 'fisrtName',
//     lName: 'lastName',
//     detail: function concatinate (){
//     var cons =   this.name + " " + this.lName;
//     return cons;
//     }

// }
// console.log(arry);
// console.log(arry.detail)

// // create a litral object.
//  var Students = {}

// //  create a object with properties
// var informa =  {
//     // this is properties with function
//     name: 'firstName',
//     nicName: 'nicName'
// };

// // create a object function with methods
// var arrys =  {
//     // this is properties with function
//     name: "firstName",
//     nicName: "nicName"
//     // this is a method of object
//     show: function concatinate(){
//         console.log(this.name + " " + this.nicName)
//     }
// };
// console.log(information())