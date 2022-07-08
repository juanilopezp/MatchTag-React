import React from 'react'
import { BrowserRouter , Link} from 'react-router-dom'
function Home() {
  return (
     <center>
      <header>
       <input type="search" name="busqueda"/>
       <button class="enlace">buscar</button>
       <button class="Deporte">Depooooorteeee</button>
       <button class="Musica">Musica</button>
       <button class="Juegos">Juegos</button>
       <button class="Cine">Cine</button>
       <button class="Economia">Economia</button>
       <button class="Estudio">Estudio</button>
       <button class="LoginBtn">YaTa</button>
      </header>
     </center>
  )
}

export default Home