import "./ProgressCalculator.css";

const ProgressCalculator = (props) => {
  let styleObj = {};
  if (props.progressMade > 0) {
    styleObj = {
      width: `${props.progressMade}%`,
      opacity: 1,
    };
  }

  return (
    <div className="progress-container">
      <h3>Progress</h3>
      <div className="progress-bar">
        <div className="progress-done" style={styleObj}>
          {props.progressMade}%
        </div>
      </div>
    </div>
  );
};

export default ProgressCalculator;
