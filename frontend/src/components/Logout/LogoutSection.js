import { useMemo } from "react";
import "./LogoutSection.css";

const LogoutSection = ({ propHeight, propTop }) => {
  const groupDiv15Style = useMemo(() => {
    return {
      height: propHeight,
      top: propTop,
    };
  }, [propHeight, propTop]);

  return (
    <div className="group-parent19" style={groupDiv15Style}>
      <div className="rectangle-parent99">
        <div className="group-child129" />
        <div className="logout">Logout</div>
      </div>
      <div className="rectangle-parent100">
        <div className="group-child130" />
        <img
          className="material-symbolslogout-icon"
          alt=""
          src="/materialsymbolslogout.svg"
        />
      </div>
    </div>
  );
};

export default LogoutSection;
