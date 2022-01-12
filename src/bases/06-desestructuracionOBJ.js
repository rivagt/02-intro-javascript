//Desestructuracion
//Aasignacion desestructurante

const persona = {
    nombre: 'Josue',
    edad: 31,
    clave: 'loquitoxh',
    rango: 'soldado',
};
const { nombre,edad } = persona;

console.log(nombre,edad);

const usingContext = ({clave ,edad,rango = 'Coronel'})=>({
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 48.262,
        lng: 58.323,
    }
});

// const {nombreClave,anios, latlng:{lat,lng}} = usContext(persona);
const {nombreClave,anios, latlng} = usingContext(persona);
const {lat,lng} = latlng;
console.log(nombreClave,anios);
console.log(lat,lng);