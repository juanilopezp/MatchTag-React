import logo from './logo.svg';
import './App.css';
import{Link} from 'react-router';

function App() {
  return (
    <div className="App">
     <center>
        <header>

          <input type="search" name="busqueda"/>
          <button class="enlace" role="link" onclick="window.location='pantalla_deporte.html'">buscar</button>
        </header>
         <div class="cajas_buscador">
          <div class="deporte">
            <Link to='#' onclick = {toPage('pantalla_deporte')}></Link>
          </div>
          <div class="musica">
            <Link to='#' onclick = {toPage('pantalla_musica')}> Musica</Link>
          </div>
          <div class="pais">
            <Link to='#' onclick = {toPage('pantalla_pais')}>Pais</Link>
          </div>
          <div class="estudio">
             <Link to='#' onclick = {toPage('pantalla_estudio')}>Estudio</Link>
          </div> 
         </div>
      </center>
    </div>
  );
}

export default App;
