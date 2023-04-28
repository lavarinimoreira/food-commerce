import React from 'react';
import { useCart } from '../../../../hooks/useCart';
import TableDesktop from './TableDesktop';

export default function Table() {
    const { cart } = useCart();

    if (cart.length === 0) return <h1>Oops! You have no orders yet =/</h1>;

    return <TableDesktop />;
}
