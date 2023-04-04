import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import {Footer} from  './components/Footer'
import {About} from './components/About'
import {Home} from './components/Home'
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

     </Route>
     <Route path="/contact" element={<Contact />} />
            
     </Routes>
     <Footer/>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
