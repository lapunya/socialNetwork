import React from 'react';
import classes from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.navList}>
                <li>
                    <NavLink to='/profile' className={classes.link} activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink exact to='/dialogs' className={classes.link} activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/users' className={classes.link} activeClassName={classes.active}>Users</NavLink>
                </li>
                <li>
                    <NavLink to='/news' className={classes.link} activeClassName={classes.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/music' className={classes.link} activeClassName={classes.active}>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' className={classes.link} activeClassName={classes.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;