import classes from './Congratulations.module.css';
import Container from '../Container/Container';
import Pet from '../Pet/Pet';

export default function Congratulations() {
    return (
        <Container>
            <h1 className={classes.congratulations}>Congratulations!</h1>
            <h2>You completed a task!</h2>
            {Pet({ mode: 3 })}
            <p></p>
            <button className={`orangeButton`}>Back to Home</button>
        </Container>
    );
}
