import{BrowserRouter, Link, Route, Routes, withRouter, useNavigate} from 'react-router-dom';
import PantallaOtro from './matcheo/pantalla_otro';
import Matcheo from './matcheo/pantallaMatcheo.js';
import Busqueda from './matcheo/Busqueda';
import Etiquetas from './matcheo/Etiquetas';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Etiquetas />} />
        <Route path='pantalla_otro' element={<PantallaOtro />} />
        <Route path='pantallaMatcheo' element={<Matcheo />} />
        <Route path='Busqueda' element={<Busqueda />} />
      </Routes>
    </BrowserRouter>
    <header>
      <Link to='/pantalla_otro'></Link>
    </header>
    </>
  );
}

export default App;
