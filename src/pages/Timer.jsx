export default function Timer() {
    const [time, setTime] = useState(0);
    const [goal, setGoal] = useState(0);
    
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };
    
    const handleGoalChange = (e) => {
        setGoal(e.target.value);
    };
    
    return (
        <div>
        <h1>Timer</h1>
        <label>
            Time:
            <input type="number" value={time} onChange={handleTimeChange} />
        </label>
        <label>
            Goal:
            <input type="number" value={goal} onChange={handleGoalChange} />
        </label>
        <p>
            Time: {time} Goal: {goal}
        </p>
        </div>
    );
    }