import "../styles/components/Chip.css";

/**
 * The chip component is a custom component being used at two different places to indicate the USER CHOICE
 * and the EXCLUSIVE
 */
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
