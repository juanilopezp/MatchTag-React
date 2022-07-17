import React from 'react'
import { BrowserRouter , Link} from 'react-router-dom'
import './Etiquetas.css';
function Etiquetas() {
  return (
     <><center>
      <header>
        <input type="search" name="busqueda" />
        <button class="enlace">buscar</button>
      </header>
      <button class="Deporte">Depooooorteeee</button>
      <button class="Musica">Musica</button>
      <button class="Juegos">Juegos</button>
      <button class="Cine">Cine</button>
      <button class="Economia">Economia</button>
      <button class="Estudio">Estudio</button>
    </center>
    <Link to ='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
      <button class="LoginBtn">YaTa</button>
    </Link>
    <div class='p'>
      <p>Encuentra el Tag perfecto para vos</p>
    </div>
    </>
  )
}

export default Etiquetas