import React from 'react'
import { BrowserRouter , Link} from 'react-router-dom'
function Home() {
  return (
     <center>
      <header>
       <input type="search" name="busqueda"/>
       <button class="enlace">buscar</button>
      </header>
     </center>

  )
}

export default Home