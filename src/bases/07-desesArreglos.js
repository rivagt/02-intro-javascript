//Desestructuracion
//Aasignacion desestructurante

const estudiantes = ['Juan','Kikin','Rogi'];
const [e1] = estudiantes;
const [,,e2] = estudiantes;

console.log(e1);
// console.log(e2);
// console.log(estudiantes[2]);

const retornaArreglo = () => ([
    'ABC',123
]);
// const arr = retornaArreglo();
const [letras,numeros] = retornaArreglo();
console.log(letras);

const usingState = (valor) => ([
    valor,
    ()=>console.log('Hola mundo'),
]);

const [nombre,settingNombre] = usingState('Obc');
// arr[1]();
// console.log(arra);
console.log(nombre);
settingNombre();