import React, { Component } from 'react'
import "./Navbar.css"
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
  render() {
    return (
      <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Rent Car</h1>

            <div className='menu-icons' onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                </i>
            </div>


            <ul className='nav-menu'>
                {MenuItems.map((item, index) => {
                        return(
                            <li key = {index}>
                            <Link className = {item.cName} to={item.url}
                            href='/'>
                            <i className={item.icon}>
                            </i>{item.title}
                            </Link>
                        </li>
                        )
                })}

                <button>Войти</button>
            </ul>
      </nav>
    )
  }
}

export default Navbar