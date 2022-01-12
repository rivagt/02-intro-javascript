
const nombre = 'Rivaldo';
const apellido = 'Taipe';

// const nomComplete = nombre + ' ' + apellido;
const nomComplete = `
Hola:
${ nombre }
${apellido}
${ 1+1 }
`;

console.log( nomComplete );

function getSaludo(nombre) { 
    return ' Hola ' + nombre;
 }
 console.log( `Este es un texto: ${ getSaludo( nombre ) }` );