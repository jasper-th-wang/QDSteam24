import TaskCard from "./TaskCard";
import Container from "../Container/Container";

function TaskList() {
    return (
        <Container>
            <p>Today's tasks</p>
            <TaskCard />
            <br />
            <TaskCard />
            <br />
            <TaskCard />
            <br />
            <br />
            <br />
        </Container>
    )
}

export default TaskList;