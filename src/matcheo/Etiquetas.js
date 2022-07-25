import React from 'react'
import { BrowserRouter , Link} from 'react-router-dom'
import './Etiquetas.css';
import lupita from './lupita.png'
function Etiquetas() {
  return (
     <>
        <div class = "Buscador">
          <input type="search" name="busqueda" placeholder='Buscar Etiqueta'/>
          <button class="enlace"> </button>
        </div>
      <button class="Deporte">Deporte</button>
      <button class="Musica">Musica</button>
      <button class="Juegos">Juegos</button>
      <button class="Cine">Cine</button>
      <button class="Ciencia">Ciencia</button>
      <button class="Estudio">Estudio</button>

    <Link to ='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
      <button class="LoginBtn">YaTa</button>
    </Link>
    <div class='p'>
    </div>
    <p>Encuentra el Tag perfecto para vos</p>
    </>
  )
}

export default Etiquetas