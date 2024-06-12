const TimeDisplay = (props) => {
  const { totalTimeSpent, totalTimeWasted } = props;
  return (
    <div className="row mt-4">
      <div className="col">
        <div className="alert alert-light fw-bold">
          Total Hours In a Week: {24 * 7}
        </div>
      </div>

      <div className="col">
        <div className="alert alert-success fw-bold">
          Total Hours Spent: {totalTimeSpent}
        </div>
      </div>

      <div className="col">
        <div className="alert alert-danger fw-bold">
          You could have saved: {totalTimeWasted} hr
        </div>
      </div>
    </div>
  );
};

export default TimeDisplay;
