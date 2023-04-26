import { Head } from '../../../components/Head';
import SnackTitle from '../../../components/SnackTitle';
import Snacks from '../../../components/Snacks';

import { useSnack } from '../../../hooks/useSnack';

export default function Desserts() {
    const { desserts } = useSnack();

    return (
        <>
            <Head title='Desserts' description='Our best desserts.' />
            <SnackTitle>Desserts</SnackTitle>
            <Snacks snacks={desserts}></Snacks>
        </>
    );
}
