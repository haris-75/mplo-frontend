import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/auth/login">Sign In</NavigationItem>
        <NavigationItem link="/auth/signup">Sign Up</NavigationItem>
    </ul>
);

export default navigationItems;