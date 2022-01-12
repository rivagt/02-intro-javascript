import {getHeroeById,getHeroesByOwner} from './bases/08-imp-exp'

// //then = promesa se hizo correctamente
// //catch = error
// //finally = despues de then o catch
// promesa.then( (heroe) =>{
//     console.log('Heroe: ',heroe);
// });
// promesa.catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    // resolve = funcion cuando la promesa se cumple
// reject = funcion cuando la promesa falla
    // const promesa = new Promise( (resolve,reject)=> {
        return new Promise( (resolve,reject)=> {
    //1 segundo es igual al valor 1000
        setTimeout( ()=> {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve( heroe );
            }
            else{
                reject( 'No existe' );
            }
        // console.log(heroe);
            
        // reject( 'No se pudo encontrar el heroe' );
        }, 2000);
    });
    // return promesa;
}
//heroe => console.log('Heroe: ',heroe)
getHeroeByIdAsync(4).then( console.log ).catch(console.warn);