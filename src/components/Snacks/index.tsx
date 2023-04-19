import { FiPlus } from 'react-icons/fi';

import { Container } from './styles';
import { currentFormat } from '../../helpers/currencyFormat';

interface SnacksProps {
    snacks: any[];
}

export default function Snacks({ snacks }: SnacksProps) {
    function currencyFormat(price: any): import('react').ReactNode {
        throw new Error('Function not implemented.');
    }

    return (
        <Container>
            {snacks.map((snack) => (
                <div key={snack.id} className='snack'>
                    <h2>{snack.name}</h2>
                    <img src={snack.image} alt={snack.name} />
                    <p>{snack.description}</p>
                    <div>
                        <strong>{currentFormat(snack.price)}</strong>
                        <button type='button'>
                            <FiPlus />
                        </button>
                    </div>
                </div>
            ))}
        </Container>
    );
}
