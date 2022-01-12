//Arrays

// const array = new Array();
const array = [1,56,46];
// array.push(1);
// array.push(6);
// array.push(4);
// array.push(5);
let array2 = [ ...array,80 ];
// array2.push(80);
const array3 = array2.map( function(numero) {
    return numero*2;
});

console.log(array);
console.log(array2);
console.log(array3);