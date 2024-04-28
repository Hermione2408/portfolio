import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer/index";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Spotlight } from "./components/Spotlight";
import { SpotlightProvider } from "./utils/SpotlightContext";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
       <SpotlightProvider>
       <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Spotlight /> 
       </SpotlightProvider>

    </div>
  );
}

export default App;
