import "../styles/pages/index.css";
// importing components from components folder
import StarRating from "../components/Ratings";
import Bonus from "../components/Bonus";
import Button from "../components/Button";
// importing icons from the react-icons library
import { AiOutlineInfoCircle, AiFillCheckCircle } from "react-icons/ai";

/**
 *  This is the page that renders immediately the application is launched
 */
const Index = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="counter">01</div>
        <div className="group-one">
          <div>
            <img src="/images/logo.png" alt="PlayOjo" />
            <AiOutlineInfoCircle className="info-icon" />
          </div>
          <div className="rating">
            <h4>PlayOjo Casino</h4>
            <StarRating />
          </div>
          <Bonus />
        </div>
        <div className="group-two">
          <ul className="ul-list">
            <li>
              <span>
                <AiFillCheckCircle className="check-icon" />
              </span>
              <span>Retraits rapides</span>
            </li>
            <li>
              <AiFillCheckCircle className="check-icon" />
              Enregistrement en douceur
            </li>
            <li>
              <AiFillCheckCircle className="check-icon" />
              Benefices non imposables
            </li>
          </ul>
          <Button title={"JOUER"} className="btn-component" />
        </div>
      </div>
      <div className="other-info">
        <b>18+</b> - Minimum bet amount - 100 - Some other important information
        - Terms&Conditions text - <b>Terms&ConditionsLink.com</b>
      </div>
    </>
  );
};

export default Index;
