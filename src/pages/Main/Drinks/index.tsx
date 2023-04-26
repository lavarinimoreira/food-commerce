import { useContext } from 'react';

import { Head } from '../../../components/Head';
import SnackTitle from '../../../components/SnackTitle';
import Snacks from '../../../components/Snacks';

import { SnackContext } from '../../../contexts/SnackContext';

export default function Drinks() {
    const { drinks } = useContext(SnackContext);

    return (
        <>
            <Head title='Drinks' description='Our best drinks.' />
            <SnackTitle>Drinks</SnackTitle>
            <Snacks snacks={drinks}></Snacks>
        </>
    );
}
