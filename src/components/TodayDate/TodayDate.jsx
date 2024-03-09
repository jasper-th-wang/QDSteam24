function TodayDate() {
  const todayDate = new Date().toDateString();
  return <h2>{todayDate}</h2>;
}

export default TodayDate;
