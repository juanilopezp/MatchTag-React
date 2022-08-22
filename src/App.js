import{BrowserRouter, Link, Route, Routes, withRouter, useNavigate, NavLink} from 'react-router-dom';
import PantallaOtro from './matcheo/pantalla_otro';
import Matcheo from './matcheo/pantallaMatcheo.js';
import Busqueda from './matcheo/Busqueda';
import Etiquetas from './matcheo/Etiquetas';
import Home from './matcheo/Home';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='Etiquetas' element={<Etiquetas />} />
        <Route path='pantalla_otro' element={<PantallaOtro />} />
        <Route path='pantallaMatcheo' element={<Matcheo />} />
        <Route path='Busqueda' element={<Busqueda />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;