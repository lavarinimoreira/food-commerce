import { Head } from '../../../components/Head';
import SnackTitle from '../../../components/SnackTitle';
import Snacks from '../../../components/Snacks';

export default function Drinks() {
    const data = [
        {
            id: 1,
            snack: 'drink',
            name: 'Coke',
            description: 'The traditional Coca-Cola that everyone loves.',
            price: 12,
            image: 'https://i.imgur.com/Lg3aKhf.jpg',
        },
        {
            id: 2,
            snack: 'drink',
            name: 'Guaraná Antarctica',
            description: 'The irresistible and tasty Guaraná Antarctica in its canned version.',
            price: 6.5,
            image: 'https://i.imgur.com/hOBrOIm.jpg',
        },
        {
            id: 3,
            snack: 'drink',
            name: 'Pineapple Juice',
            description:
                'Natural pineapple juice with slight increments of some vegetables to strengthen your health.',
            price: 8,
            image: 'https://i.imgur.com/VV9qTMh.jpg',
        },
    ];

    return (
        <>
            <Head title='Drinks' description='Our best drinks.' />
            <SnackTitle>Drinks</SnackTitle>
            <Snacks snacks={data}></Snacks>
        </>
    );
}
