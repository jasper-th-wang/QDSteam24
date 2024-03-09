function TodayDate() {
  // Get current Date
  const currentDate = new Date();

  // Get current yea, month, day
  const year = currentDate.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
  const day = currentDate.getDate();
  const currentTIme = currentDate.getHours();

  return (
    <div>
      <h3 className="blueTitleColour">{`${month} ${day}, ${year}`}</h3>
    </div>
  );
}

export default TodayDate;
