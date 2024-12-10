import './App.css';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import Reseñas from './componentes/Reseñas';
import SobreMiTienda from './componentes/SobreMiTienda';
import Carrusel from './componentes/Carrusel';
import { Routes, Route } from 'react-router-dom';  
import Categorias from './componentes/Categorias';
import Hombres from './pages/Hombres';
import Mujeres from './pages/Mujeres';
import Ninos from './pages/Ninos';
import Ninas from './pages/Ninas';
import Registro from './componentes/Registro';  

function App() {
  return (
    <div>
      <Nav />  

      <Routes>
        
        <Route path="/" element={
          <>
            <Carrusel /> 
            <h1 style={{ fontSize: '40px', textAlign: 'center', marginTop: '40px' }}>
              Zapatillas para Todos
            </h1>
            <p style={{ color: 'black', fontSize: '20px', textAlign: 'center', margin: '20px 0' }}>
              Encuentra el estilo perfecto para cada miembro de la familia.
            </p>
            <Categorias /> 
            <SobreMiTienda />
            <Reseñas />
          </>
        } />
        
        
        <Route path="/hombres" element={<Hombres />} />
        <Route path="/mujeres" element={<Mujeres />} />
        <Route path="/ninos" element={<Ninos />} />
        <Route path="/ninas" element={<Ninas />} />
        <Route path="/registro" element={<Registro />} />  

        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>

      <Footer /> 
    </div>
  );
}

export default App;
