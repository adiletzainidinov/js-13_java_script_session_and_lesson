// function calc(y, x, z) {
//     prompt('введите число') = y
//     prompt('введите число') = ''
//     prompt('введите число') = z
//     let result = y + z
//     confirm('результат') = result
// }

// calc(12, 12,22)


const a = +prompt('write')
const b = prompt('write')
const c = +prompt('write')

function calc2(a, b, c) {
    if (a === 0 || c === 0){
        alert('мындай оператор жок')
     } 
     if (b === "+"){
        alert(a + c);
     }  if (b === "-"){
        alert(a + c);
     }  if (b === "*"){
        alert(a + c);
     }  if (b === "/"){
        alert(a + c);
     }
     else {
        alert('мындай оператор жок')
     }


}


calc2(a, b, c);