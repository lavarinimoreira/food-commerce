import { createContext, useEffect, useState, ReactNode } from 'react';

import { SnackData } from '../interfaces/SnackData';
import { log } from 'console';

interface Snack extends SnackData {
    quantity: number;
    subtotal: number;
}

interface UpdateCartProps {
    id: number;
    snack: string;
    newQuantity: number;
}

interface RemoveSnackFromCart {
    id: number;
    snack: string;
}

interface CartContextProps {
    cart: Snack[];
    addSnackIntoCart: (snack: SnackData) => void;
    // updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void;
    // removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Snack[]>([]);

    function addSnackIntoCart(snack: SnackData): void {
        const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
        const newCart = [...cart, newSnack]; // push...

        console.log(newCart);

        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
    );
}
