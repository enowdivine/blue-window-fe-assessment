import "../styles/components/Button.css";

/**
 * This a custom button that takes only one prop named title. It is used to create the PLAY button
 */
const Button = ({ title }) => {
  return (
    <button className="btn">
      <span>{title}</span>
    </button>
  );
};

export default Button;
