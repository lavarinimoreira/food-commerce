import { Title } from './styles';
import { ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
}

export default function SnackTitle({ children }: TitleProps) {
    return <Title>{children}</Title>;
}
