import{BrowserRouter, Link, Route, Routes, withRouter, useNavigate, NavLink} from 'react-router-dom';
import PantallaOtro from './matcheo/pantalla_otro';
import Matcheo from './matcheo/pantallaMatcheo.js';
import Busqueda from './matcheo/Busqueda';
import Etiquetas from './matcheo/Etiquetas';
import Home from './matcheo/Home';
import Inicio from "./matcheo/inicio";
import Login from "./matcheo/login";
import Register from "./matcheo/register";
import Subir from "./matcheo/subir";
import Edicion from './matcheo/Edicion';

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
        <Route path='Bienvenido' element={<Inicio/>} />
        <Route path='Login' element={<Login/>} />
        <Route path='Register' element={<Register/>}/>
        <Route path='Publicar' element={<Subir/>}/>
        <Route path='Edicion' element={<Edicion/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;