import './App.css';
import{BrowserRouter, Link, Route, Routes, withRouter, useNavigate} from 'react-router-dom';
import Deporte from './matcheo/pantalla_deporte';
import Musica from './matcheo/pantalla_musica'
import Estudio from './matcheo/pantalla_estudio';
import Pais from './matcheo/pantalla_pais';
import Home from './matcheo/Home';

function App() {
  return (   
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pantalla_deporte' element={<Deporte/>}/>
            <Route path='/pantalla_musica' element={<Musica/>}/>
            <Route path='/pantalla_estudio' element={<Estudio/>}/>
            <Route path='/pantalla_pais' element={<Pais/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
