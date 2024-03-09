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
        </Container>
    )
}

export default TaskList;