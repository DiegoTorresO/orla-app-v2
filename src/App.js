import './App.css';
import BasicCard from './components/card';
import Footer from './components/footer';
import NavBar from './components/navbar';
import NavBarV2 from './components/navbarV2';
import Selector from './components/selector';
import { useState } from "react";
import getAlumnos from './components/listaAlumnos'

function App() {
  const [mostrar, setMostrar] = useState({


    BasicCard: true,
    NavBar: true,
    NavBarV2: false,
    Selector: false
  });
  return (
    <div className="App">
        {mostrar.NavBar && (
          <NavBar />
        )}
        {mostrar.NavBarV2 && (
          <NavBarV2 mostrar={setMostrar}/>
        )}
      <header className="App-header">
      {mostrar.Selector && (
          <Selector/>
        )}
        {mostrar.BasicCard && (
          <BasicCard mostrar={setMostrar}/>
        )}
      </header>
      <Footer />
    </div>
  );
}

export default App;
