import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://lh3.googleusercontent.com/oFOFK_rpegm_ONODDFRKFtDC_NucLGBZPx8M-5nMi-78NkRoupHKoY8K7isl5gfDXXVCUg=s170'/>
            <div className={classes.loginBlock}>
                {props.isAuth ? 
                props.login :
                <NavLink to='/login'>
                    Login
                </NavLink>}
            </div>
        </header>
    );
};

export default Header;