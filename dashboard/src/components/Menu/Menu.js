import React from 'react';
import NavigationItem from '../MenuItem/MenuItem';

const Menu = props => {
    const { routes, path } = { ...props };

    return (
        <nav>
            <ul>
                {routes.map( (route, index) => 
                    <NavigationItem key={index} link={path + route.path}>{route.label}</NavigationItem>
                )}            
            </ul>
        </nav>
    )
};

export default Menu;