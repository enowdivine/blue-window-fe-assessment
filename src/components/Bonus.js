import "../styles/components/Bonus.css";
import Chip from "./Chip";

/**
 * The bonus componennt comprises of the entire bonus section which indicates the number of free spins available
 */
const Bonus = () => {
  return (
    <fieldset className="bonus">
      <legend>BONUS</legend>
      <Chip title={"exclusive"} marginTop={-10} marginLeft={-20} />
      <div className="content">
        <h2>250 CA$</h2>
        <p>+ 80 Tour Gratuits</p>
      </div>
    </fieldset>
  );
};

export default Bonus;
