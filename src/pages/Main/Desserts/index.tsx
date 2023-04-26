import { useContext } from 'react';

import { Head } from '../../../components/Head';
import SnackTitle from '../../../components/SnackTitle';
import Snacks from '../../../components/Snacks';

import { SnackContext } from '../../../contexts/SnackContext';

export default function Desserts() {
    const { desserts } = useContext(SnackContext);

    return (
        <>
            <Head title='Desserts' description='Our best desserts.' />
            <SnackTitle>Desserts</SnackTitle>
            <Snacks snacks={desserts}></Snacks>
        </>
    );
}
