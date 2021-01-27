import {registerImage} from './lazy'


const maximum = 122;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {
    //creamos un div von la clase p-4
    const container = document.createElement('div');
    container.className = "p-4";
    //creamos la imagen con sus clases u propiedades
    const imagen = document.createElement('img');
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;
    //el div container en vuelve la imagen de esta manera.
    container.appendChild(imagen);

    return container;
}

const nuevaImagen = createImageNode();
const montNode = document.getElementById("images");

const addButton = document.querySelector('button');


const addImage = () => {
    const newImage = createImageNode();
    montNode.appendChild(newImage);
    registerImage(newImage);
}


addButton.addEventListener("click", addImage);

