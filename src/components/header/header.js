import React from "react";
import logo from "../../assets/img/logo.png";
import style from "./style.css";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="fila-1">
                    <a href="index.html"><img className="logo" src={logo}/></a>
                    <div className="icons">
                        <div className="search-div" onClick={Busqueda}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="search h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                <nav className="nav">
                    <ul className="nav-ul">
                        <li className="nav-ul-li"><a href="predicciones.html">Predicciones</a></li>
                        <li className="nav-ul-li"><a href="capitales.html">Capitales del Mundo</a></li>
                        <li className="nav-ul-li"><a href="mapas.html">Mapas</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class Busqueda extends React.Component {
    render() {
        return(
            <div className="busqueda">
                <input type="text" className="busqueda-input" placeholder="Busca tu ciudad aquí"></input>
            </div>
        )
        
    }

}

export default (Busqueda, Header);
