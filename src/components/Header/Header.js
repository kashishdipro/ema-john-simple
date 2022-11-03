import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../contexts/AuthProvider';
import "./Header.css"

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/order">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/manage-inventory">Manage Inventory</Link>
                {
                    user?.uid ?
                    <button onClick={logOut}>Log Out</button>
                    :
                    <Link to="/login">Login</Link>
                }
                <span className='text-color'>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;