import { createContext, useEffect, useState, ReactNode } from 'react';

import { SnackData } from '../interfaces/SnackData';

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
    updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void;
    removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    //
}
