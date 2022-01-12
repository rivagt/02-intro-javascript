import heroes, {owners} from '../data/heroes';
// console.log(owners);

// console.log(heroes);
// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
// };
//find encuentra 1 objeto
// find args = parametro a recorrer, iguala el id del objeto con el id recibido en la funcion
const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);
// console.log(getHeroeById(2));

//filter puede devolver varios objetos
const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner == owner);
// console.log(getHeroesByOwner('DC'));

export {
    getHeroeById,
    getHeroesByOwner,
};