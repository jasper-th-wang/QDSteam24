import classes from './Congratulations.module.css';
import Container from '../Container/Container';
import Pet from '../Pet/Pet';

export default function Congratulations() {
    return (
        <Container>
            <h1>Congratulations!</h1>
            <p>You completed a task!</p>
            {Pet({ mode: 1 })}
        </Container>
    );
}
