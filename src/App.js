import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Playstation from "./pages/PlayStation";
import Pc from "./pages/pc";
import NintendoPage from "./pages/nintendo";
import ContactoPage from "./pages/contacto";

function App() {
	  return (
		      <Router>
		        <div className="App">
		          <Navbar />
		          <main>
		            <Routes>
		              <Route path="/" element={<Home />} />
					  <Route path="/play-station" element={<Playstation />} />
					  <Route path="/pc" element={<Pc />} />
					  <Route path="/nintendo" element={<NintendoPage />} />
					  <Route path="/contacto" element={<ContactoPage />} />
		              {/* Agrega más rutas aquí */}
		            </Routes>
		          </main>
		          <Footer />
		        </div>
		      </Router>
		    );
}

export default App;








