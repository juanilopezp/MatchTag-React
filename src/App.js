import './App.css';
import{BrowserRouter, Link, Route, Routes, withRouter, useNavigate} from 'react-router-dom';
import PantallaOtro from './matcheo/pantalla_otro';
import Matcheo from './matcheo/pantallaMatcheo.jsx';
import Busqueda from './matcheo/Busqueda';
import Etiquetas from './matcheo/Etiquetas';
import protoPerfil from './matcheo/protoPerfil';
function App() {
  return (   
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Etiquetas/>}/>
            <Route path='pantalla_otro' element={<PantallaOtro/>}/>
            <Route path='pantallaMatcheo' element={<Matcheo/>}/>
            <Route path='Busqueda' element={<Busqueda/>}/>
            <Route path='Perfil' element={<protoPerfil/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
