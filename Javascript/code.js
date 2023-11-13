
/*
- Create a repo called Marks and clone it on your laptop.
- Open the cloned repo in your VS code.
- Your program should allow the user to enter their marks via an input element. Such as 99, and you should display A on a label after pressing on a button.
NB: Make use of a switch not if statement
Marks       Grade
=====       =====
100         A+
90 - 99     A
80 - 89     B+
70 - 79     Distinction
60 - 69     C+
50 - 59     Passed
Below 50    Failed
*/

// let numbers = [100, 99, 90, 89, 80, 79, 70, 69, 60, 59, 50]
            



// let numbers = x;
// switch (50 > x) {
//     case 100:
//         console.alert("A+")
//     break;
//     case  90 <= 99: 
//         console.alert("A")
//     break;
//     case 80 <= 89:
//         console.alert("B+")
//     break;
//     case 79, 70:
//         console.alert("Distinction")
//     break;
//     case 69, 60:
//         console.alert("C+")
//     break;
//     case 59 , 50:
//         console.alert("Passed")
//     break;
//     case 50 <= 0 :
//         console.alert("Failed")
//     break;
// }
document.getElementById('numb'),addEventListener('click','function')
console.alert('marks'),



function button()

btnAdd.addEventListener('click', addition)


let marks = 50 > x;
let Passed;
let Failed;

switch (marks) {
  case x <= 100:
    Passed = "A+";
    break;
  case x <= 90:
    Passed = "A";
    break;
  case x <=80:
    Passed = "B+";
    break;
  case  x <=70:
    Passed = "B";
    break;
  case x <=60:
    Passed = "C+";
    break;
  case 50> x :
    Passed = "C";
    break;
  case x < 50:
    Failed = "fail";
    break;
  default:
    Failed = "undefined";
}

console.alert(marks);

