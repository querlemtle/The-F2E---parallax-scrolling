import PropTypes from "prop-types";
import "./Contexts.css";

export default function Contexts({ title, tag, sponsor }) {
  return (
    <div className="context__container">
      <h2 className="context__title">{title}</h2>
      <h3 className="context__tag">{tag}</h3>
      <p className="context__sponsor">{sponsor}</p>
    </div>
  );
}

Contexts.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  sponsor: PropTypes.string.isRequired,
};
