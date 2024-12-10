import './App.css';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import Reseñas from './componentes/Reseñas';
import SobreMiTienda from './componentes/SobreMiTienda';
import Carrusel from './componentes/Carrusel';
import { Routes, Route } from 'react-router-dom';  // No necesitas importar BrowserRouter aquí
import Categorias from './componentes/Categorias';
import Hombres from './pages/Hombres';
import Mujeres from './pages/Mujeres';
import Ninos from './pages/Ninos';
import Ninas from './pages/Ninas';
import Registro from './componentes/Registro';  // Importa el componente de registro

function App() {
  return (
    <div>
      <Nav />  {/* Componente que siempre estará visible */}

      <Routes>
        {/* Página principal */}
        <Route path="/" element={
          <>
            <Carrusel /> {/* Solo se muestra en la página principal */}
            <h1 style={{ fontSize: '40px', textAlign: 'center', marginTop: '40px' }}>
              Zapatillas para Todos
            </h1>
            <p style={{ color: 'black', fontSize: '20px', textAlign: 'center', margin: '20px 0' }}>
              Encuentra el estilo perfecto para cada miembro de la familia.
            </p>
            <Categorias /> {/* Este componente solo se muestra en la página principal */}
            <SobreMiTienda />
            <Reseñas />
          </>
        } />
        
        {/* Páginas de categorías */}
        <Route path="/hombres" element={<Hombres />} />
        <Route path="/mujeres" element={<Mujeres />} />
        <Route path="/ninos" element={<Ninos />} />
        <Route path="/ninas" element={<Ninas />} />
        <Route path="/registro" element={<Registro />} />  {/* Ruta para la página de registro */}

        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>

      <Footer /> {/* Este componente siempre estará visible */}
    </div>
  );
}

export default App;
