import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './header.module.css';

const Header = (props) => {
    const logout = () => {
        props.logout();
    }
    return (
        <header className={classes.header}>
            <img src='https://lh3.googleusercontent.com/oFOFK_rpegm_ONODDFRKFtDC_NucLGBZPx8M-5nMi-78NkRoupHKoY8K7isl5gfDXXVCUg=s170'/>
            <div className={classes.loginBlock}>
                {props.isAuth 
                ? <div>
                    <span>{props.login}</span> 
                    <button onClick={logout}>LogOut</button>
                </div>
                : <NavLink to='/login'>
                    Login
                </NavLink>}
            </div>
        </header>
    );
};

export default Header;