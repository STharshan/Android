import { useMemo } from "react";
import "./HelpSection.css";

const HelpSection = ({
  buttonText,
  propTop,
  propBottom,
  propCursor,
  onGroupContainer16Click,
}) => {
  const groupDiv18Style = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
      cursor: propCursor,
    };
  }, [propTop, propBottom, propCursor]);

  return (
    <div
      className="group-parent22"
      onClick={onGroupContainer16Click}
      style={groupDiv18Style}
    >
      <div className="rectangle-parent103">
        <div className="group-child134" />
        <div className="help2" >{buttonText}</div>
      </div>
      <div className="rectangle-parent104">
        <div className="group-child135" />
        <img
          className="material-symbolslogout-icon1"
          alt=""
          src="/materialsymbolslogout.svg"
        />
      </div>
    </div>
  );
};

export default HelpSection;
