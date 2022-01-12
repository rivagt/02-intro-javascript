const persona = {
    nombre: 'Tony',
    apellido: 'Strak',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 46545646,
        lat: 15.2165,
        lng: 39.4061,

    }
};
// console.table( persona );
const persona2 = { ...persona };
persona2.nombre = 'Mariano';
console.log(persona);

console.log(persona2);