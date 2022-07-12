import './App.css';
import{BrowserRouter, Link, Route, Routes, withRouter, useNavigate} from 'react-router-dom';
import PantallaOtro from './matcheo/pantalla_otro';
import Matcheo from './matcheo/pantallaMatcheo';
import Busqueda from './matcheo/Busqueda';
import Etiquetas from './matcheo/Etiquetas';

function App() {
  return (   
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Etiquetas/>}/>
            <Route path='pantalla_otro' element={<PantallaOtro/>}/>
            <Route path='pantallaMatcheo' element={<Matcheo/>}/>
            <Route path='Busqueda' element={<Busqueda/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
