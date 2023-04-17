import React, { useState } from 'react';
import { Container } from './styles';

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
                        <a href='#'>
                            <BurgerIcon />
                            <span>Burgers</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <PizzaIcon />
                            <span>Pizzas</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <SodaIcon />
                            <span>Drinks</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <DessertIcon />
                            <span>Desserts</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
