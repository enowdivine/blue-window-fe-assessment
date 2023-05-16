import "../styles/components/Button.css";

const Button = ({ title }) => {
  return (
    <button className="btn">
      <span>{title}</span>
    </button>
  );
};

export default Button;
