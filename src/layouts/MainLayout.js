import "../styles/layouts/MainLayout.css";
import Chip from "../components/Chip";

const MainLayout = ({ children }) => {
  return (
    <fieldset className="main-layout">
      <legend>
        <Chip title={"user choice"} marginTop={40} />
      </legend>
      {children}
    </fieldset>
  );
};

export default MainLayout;
