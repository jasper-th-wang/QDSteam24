export default function minutesToHoursAndMinutes(minutes) {
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
