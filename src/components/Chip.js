import "../styles/components/Chip.css";

const Chip = ({ title, marginTop, marginLeft }) => {
  return (
    <div
      className="chip"
      style={{ marginTop: marginTop, marginLeft: marginLeft }}
    >
      <span>{title}</span>
    </div>
  );
};

export default Chip;
