//functions 
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola mundo`;
// saluda = 20;
console.log(saludar('Sasuke'));
console.log(saludar3('Wilmer'));
console.log(saludar4());

const getUser = () =>({
        uid: 94949,
        username: 'rivita123',
    });
const user = getUser();

console.log(user);

//Tarea
//1. Convertir a funcion de flecha
//2. Retornar objeto implicito
//3. Pruebas.

// function getUsuarioActivo(nombre) {
//     return {
//         uid:2752,
//         username:nombre,
//     }
    
// };

// const userActive = getUsuarioActivo('Luis');
// console.log(userActive);
const getUsuarioActivo = (nombre)=>({
    uid:7469,
    username:nombre,
});
const userActive = getUsuarioActivo('Rivita');
console.log(userActive);