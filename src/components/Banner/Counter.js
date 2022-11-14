import "./Counter.css";
import PropTypes from "prop-types";
import { Tween } from "react-gsap";

export default function Counter({ count, title }) {
  return (
    <div className="counter">
      <Tween
        to={{
          count,
        }}
        ease="none"
        duration={5}
      >
        <h3 className="counter__count">0</h3>
      </Tween>
      <p className="counter__title">{title}</p>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
