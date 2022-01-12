
// const getImagenPromise = () => new Promise(resolve => resolve('htpps://copxkac.com'));
// const getImagenPromises = () => {
//     const promesa = new Promise((resolve,reject) => {
//         resolve('htpps://copxkac.com');
//     });
//     return promesa;
// };
//await siempre se usa en una funcion async
const getImagen = async () => {
    try {
        const apiKey = 'sZj3gDhchQ0H66EafpHnpwr9rkdPBhpC';
        const http = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await http.json();
        const {url} = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (err){
        console.log(err);
    }
    
};

getImagen();