import "../styles/layouts/MainLayout.css";
import Chip from "../components/Chip";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Chip title={"user choice"} marginTop={38} marginLeft={-8} />
      {children}
    </div>
  );
};

export default MainLayout;
