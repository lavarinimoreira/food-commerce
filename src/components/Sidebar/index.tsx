import React, { useState } from 'react';
import { Container } from './styles';
import { NavLink } from 'react-router-dom';

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as SodaIcon } from '../../assets/soda.svg';
import { ReactComponent as DessertIcon } from '../../assets/ice-cream.svg';

import menuImg from '../../assets/menu.svg';

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Container isMenuOpen={menuOpen}>
            <button type='button' onClick={handleToggleMenu}>
                <img src={menuImg} alt='Open and close menu.' />
            </button>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>
                            <BurgerIcon />
                            <span>Burgers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='pizzas'>
                            <PizzaIcon />
                            <span>Pizzas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='drinks'>
                            <SodaIcon />
                            <span>Drinks</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='desserts'>
                            <DessertIcon />
                            <span>Desserts</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
