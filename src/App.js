import './App.css';
import{BrowserRouter, Link, Route, Routes, withRouter, useNavigate} from 'react-router-dom';
import Deporte from './matcheo/pantalla_deporte';
import Musica from './matcheo/pantalla_musica'
import Estudio from './matcheo/pantalla_estudio';
import Pais from './matcheo/pantalla_pais';

function App() {
  let history = useNavigate();
  return (   
   <BrowserRouter>
      <center>
        <header>
          <input type="search" name="busqueda"/>
          <button class="enlace">buscar</button>
        </header>
    
          <Routes>
            <Route path='/pantalla_deporte' element={<Deporte/>}/>
            <Route path='/pantalla_musica' element={<Musica/>}/>
            <Route path='/pantalla_estudio' element={<Estudio/>}/>
            <Route path='/pantalla_pais' element={<Pais/>}/>
          </Routes>
          <Link to='/pantalla_deporte'>Deportes</Link>
          <Link to='/pantalla_musica'> Musica</Link>
          <Link to='./pantalla_pais'>Pais</Link>
          <Link to='./pantalla_estudio'>Estudio</Link>
          <button onClick={() =>{
            history.push('/pantalla_deporte');
          }}>
            Deportes
          </button>
      </center>
    </BrowserRouter>
  );
}

export default App;
