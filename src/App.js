import './assets/css/App.css';
import React from 'react';
import bg from './assets/img/fondo.jpg'

//Importar Componentes
import Header from "./components/header/header"

function App() {
  return (
    <div className="App">
      <img className="bg" src={bg} />
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default App;
