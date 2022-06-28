import React from 'react'
import { BrowserRouter , Link} from 'react-router-dom'

function Home() {
  return (
     <center>
      <header>
       <input type="search" name="busqueda"/>
       <button class="enlace">buscar</button>
      </header>
      <Link to='/pantalla_deporte'>Deportes</Link>
      <Link to='/pantalla_musica'> Musica</Link>
      <Link to='./pantalla_pais'>Pais</Link>
      <Link to='./pantalla_estudio'>Estudio</Link>  
     </center>
  )
}

export default Home