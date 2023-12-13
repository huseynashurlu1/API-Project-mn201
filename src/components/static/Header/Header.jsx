import React, { useContext } from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'
import { GiClothes } from "react-icons/gi";
import { BlogContext } from '../../../context/BlogContext';

const Header = () => {
    const context = useContext(BlogContext)
    console.log(context.changeTheme);

    const themeHandler = () => {
        context.changeTheme()
    }
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="logo">
                            <Link to='/'><GiClothes /> Black Shopping</Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <nav>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/products'>Products</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header