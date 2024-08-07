import './sass/main.scss'
import Handlebars from "handlebars";

const start = async () => {
    console.log('Hola Mundo!')
    
    try {

        const respuesta = await fetch('templates/card.hbs')

        if( !respuesta.ok ) {
            throw new Error('No se pudo obtener la plantilla')
        }

        const plantilla = await respuesta.text()
        
        console.log(plantilla)

        const template = Handlebars.compile(plantilla)
       

        const respuestaBack = await fetch('http://localhost:8080/productos')

        if ( !respuesta.ok ) {
            throw new Error('Algo paso con la entrega', respuestaBack.status)
        }

        const dataProductos = await respuestaBack.json()
        console.log(dataProductos)

        const data = { productos: dataProductos }
        console.log(data)
        const html = template(data)

        console.log(html)

        const contenedorCards = document.querySelector('#contenedor-cards')

        contenedorCards.innerHTML = html

    } catch (error) {
     }

    }

window.addEventListener('DOMContentLoaded', start)