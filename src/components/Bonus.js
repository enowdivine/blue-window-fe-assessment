import "../styles/components/Bonus.css";
import Chip from "./Chip";

const Bonus = () => {
  return (
    <fieldset className="bonus">
      <legend>BONUS</legend>
      <Chip title={"user choice"} marginTop={-10} />
      <div className="content">
        <h2>250 CA$</h2>
        <p>+ 80 Tour Gratuits</p>
      </div>
    </fieldset>
  );
};

export default Bonus;
