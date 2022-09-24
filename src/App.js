import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Contacto" element={<Contacto />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
