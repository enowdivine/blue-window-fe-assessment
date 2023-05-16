import "../styles/components/Chip.css";

const Chip = ({ title, marginTop }) => {
  return (
    <div className="chip" style={{ marginTop: marginTop }}>
      <span>{title}</span>
    </div>
  );
};

export default Chip;
