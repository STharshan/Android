import { useMemo } from "react";
import "./SectionCard1.css";

const SectionCard1 = ({
  pageTitle,
  iconImageUrl,
  propTop,
  propBottom,
  onGroupContainer7Click,
}) => {
  const groupDiv17Style = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div
      className="group-parent21"
      onClick={onGroupContainer7Click}
      style={groupDiv17Style}
    >
      <div className="rectangle-parent101">
        <div className="group-child132" />
        <img
          className="mingcutedown-fill-icon25"
          alt=""
          src="/mingcutedownfill1.svg"
        />
        <div className="your-shop5">{pageTitle}</div>
      </div>
      <div className="rectangle-parent102">
        <div className="group-child133" />
        <img className="mdishop-outline-icon1" alt="" src={iconImageUrl} />
      </div>
    </div>
  );
};

export default SectionCard1;
