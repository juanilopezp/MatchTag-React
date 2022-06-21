import logo from './logo.svg';
import './App.css';

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
            <link></link>
          </div>
          <div class="musica">
            <a href="pantalla_musica.html">Musica</a>
          </div>
          <div class="pais">
            <a href="pantalla_pais.html">Pais</a>
          </div>
          <div class="estudio">
             <a href="pantalla_estudio.html">Estudio</a>
          </div> 
        </div>
      </center>
    </div>
  );
}

export default App;
