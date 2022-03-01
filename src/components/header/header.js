import React from "react";
import logo from "../../assets/img/logo.png";
import style from "./style.css";
class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="fila-1">
                    <img className="logo" src={logo}/>
                    <div className="icons">
                        <div className="search-div">
                            <svg xmlns="http://www.w3.org/2000/svg" className="search h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <div className="menu-div">
                            <svg xmlns="http://www.w3.org/2000/svg" className="menu h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                <nav className="nav">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;