
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Facturas from './routes/Facturas';
import Clientes from './routes/Clientes';
import DetalleFactura from './routes/DetalleFactura';
import Navbar from './components/Navbar'
import { Register } from './components/Register';
import Login from './components/Login';
import ObjectProvider from './context/ObjectProvider'



function App() {
  return (

    <ObjectProvider>
    
      <Router>
        
        <Navbar />

        <Routes>
          <Route path="/" element={ <Home />} />
        
          <Route path="/facturas" element={ <Facturas />} />
        
          <Route path="/clientes" element={ <Clientes />} />
        
          <Route path="/factura/:id" element={ <DetalleFactura />} />

          <Route path="/register" element={ <Register /> } />

          <Route path="/login" element={ <Login /> } />
        </Routes>
        
      </Router>
    
    </ObjectProvider>
    
  );
}

export default App;
