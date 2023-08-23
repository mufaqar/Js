// function sum() {
//       let a = document.getElementById("five").value;
//       let b = document.getElementById("six").value;
//       (parseInt(a) + parseInt(b))
//     }

// function diff() {
//   let a = document.getElementById("one").value;
//   let b = document.getElementById("two").value;
//   console.log ('parseInt(a) + parseInt(b)');
// }
// function product() {
// let a = document.getElementById("three").value;
// let b = document.getElementById("four").value;
// (parseInt(a) * parseInt(b))
// }
function sum() {
  var a = document.getElementById('one').value;
  var b = document.getElementById('s2').value;
  var form = document.getElementById('formula').value;

  var t = parseInt(a) +parseInt(form)+ parseInt(b); 
  
 document.getElementById('result').innerHTML=t;




}



                    // Primitive data types
// 1-number(number can be of any type)
// * It can be int , float , double , negative , positive
// let temp = -3;
// let temp = 45;
// let price = 50.50;


// 2-string (Characters) (can be use with single or double commas)
// let a = "amna";

// 3-Boolean (true , false)
// let isloggedin = true;
// let isloggedout = false;


// undefined
// let a;
// console.log(a);


// Bigint

// Symbol






















