import "./Flow.css";
import PropTypes from "prop-types";

export default function Flow({ ordinal, unit }) {
  return (
    <div className="flow">
      <div className="flow__line" />
      <div className="flow__line" />
      {[...Array(ordinal + 1).keys()].slice(1).map((num) => (
        <div className="flow__circle" key={`week-${num}`}>
          <p className="flow__ordinal">{num}</p>
          <p className="flow__unit">{unit}</p>
        </div>
      ))}
      <div className="flow__line flow__line--desktop" />
    </div>
  );
}

Flow.propTypes = {
  ordinal: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};
