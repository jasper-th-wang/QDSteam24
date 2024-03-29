import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value} Minutes`;
}

function minutesToHoursAndMinutes(minutes) {
  // Calculate the hours and minutes
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  // Create an array to hold the parts of the result
  let resultParts = [];

  // If there are any hours, add them to the result parts
  if (hours > 0) {
    resultParts.push(hours + (hours === 1 ? ' hour' : ' hours'));
  }

  // If there are any minutes, add them to the result parts
  if (mins > 0) {
    resultParts.push(mins + (mins === 1 ? ' minute' : ' minutes'));
  }

  // Join the parts with a space and return the result
  // If there are no hours or minutes, return "0 minutes"
  return resultParts.length > 0 ? resultParts.join(' ') : '0 minutes';
}

export default function DiscreteSliderSteps({ selectedTime, onSliderChange }) {
  const handleSliderChange = (event, newValue) => {
    onSliderChange(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={0}
        value={selectedTime}
        getAriaValueText={valuetext}
        step={30}
        marks
        min={0}
        max={480}
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
      />
      <h2>{minutesToHoursAndMinutes(selectedTime)}</h2>
    </Box>
  );
}
