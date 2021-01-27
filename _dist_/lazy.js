
const isIntersecting = (entry) => {
    return entry.isIntersecting //true (dentro de la pantalla)
}

const accion = (entry) => {
    const nodo = entry.target;
    console.log("Nueva imagen")

    //dejar de escuchar la imagen (unlisten)
    observer.unobserve(nodo);
    
}


const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion)
})

export const registerImage = (imagen) => {
    //IntersectionObserver -> observe(imagen)
    observer.observe(imagen)
}