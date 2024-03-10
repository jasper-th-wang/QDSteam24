import { useNavigate } from 'react-router-dom';
import TodayDate from '../components/TodayDate/TodayDate';
import Container from '../components/Container/Container';
import TimePicker from '../components/TimePicker/TimePicker';
import Pet from '../components/Pet/Pet';

function Greeting() {
  // Get current Date
  const currentDate = new Date();

  // Get current yea, month, day
  const year = currentDate.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    currentDate
  );
  const day = currentDate.getDate();
  const currentTIme = currentDate.getHours();

  let greeting;

  if (currentTIme > 0 && currentTIme < 12) {
    greeting = <p>Good Morning!</p>;
  } else if (currentTIme >= 12 && currentTIme < 18) {
    greeting = <p>Good Afternoon!</p>;
  } else {
    greeting = <p>Good Evening!</p>;
  }

  return (
    <div>
      <TodayDate />
      <Pet mode={1} />
      <div className="orangeColour" style={{ fontWeight: 'bolder' }}>
        {greeting}
      </div>
    </div>
  );
}

// function SetTime() {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);

//   const handleHoursChange = (event) => {
//     const newHours = parseInt(event.target.value, 10);
//     setHours(newHours >= 0 ? newHours : 0);
//   };

//   const handleMinutesChange = (event) => {
//     const newMinutes = parseInt(event.target.value, 10);
//     setMinutes(newMinutes >= 0 ? newMinutes : 0);
//   };

//   const handleSetGoal = (event) => {
//     event.preventDefault();
//     console.log(hours + ':' + minutes);
//   };

//   return (
//     <form>
//       <Stack>
//         <label>Hours:</label>
//         <input
//           type="number"
//           value={hours}
//           onChange={handleHoursChange}
//           min="1"
//           max="24"
//           step="1"
//         />
//         <label>Minutes:</label>
//         <input
//           type="number"
//           value={minutes}
//           onChange={handleMinutesChange}
//           min="0"
//           max="60"
//           step="1"
//         />
//         <button className="blueButton" onClick={handleSetGoal}>
//           Set Today's Goal
//         </button>
//       </Stack>
//     </form>
//   );
// }

function SetDailyGoal() {
  const navigate = useNavigate();
  const handleGoalSubmit = (event) => {
    event.preventDefault();
    console.log('Goal Submitted');
    navigate('/');
  };
  return (
    <Container>
      <Greeting />
      <p>
        Let's set a goal for today! How long do you want to spend time to study
        today?
      </p>
      <form>
        <TimePicker />
        <button className="blueButton" onClick={handleGoalSubmit}>
          Set Today's Goal
        </button>
      </form>
    </Container>
  );
}

export default SetDailyGoal;
