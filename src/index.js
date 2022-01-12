const activo = true;

//forma tradicional
// let mensaje = 'Inactivo';

// if(!activo) {
//  mensaje = 'Activo';
// }else{
//     mensaje ='Inactivo';
// }
// console.log(mensaje);
//operador ternario
// const mensaje = (activo) ? 'Activo' : 'Inactivo';
const mensaje = !activo && 'Activo';
// if (activo) mensaje = "Activo";
console.log(mensaje);