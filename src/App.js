import './App.css';
import{BrowserRouter, Link, Route, Routes, withRouter, useNavigate} from 'react-router-dom';
import Home from './matcheo/Home';
import PantallaOtro from './matcheo/pantalla_otro';
import Matcheo from './matcheo/pantallaMatcheo';

function App() {
  return (   
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='pantalla_otro' element={<PantallaOtro/>}/>
            <Route path='pantallaMatcheo' element={<Matcheo/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
