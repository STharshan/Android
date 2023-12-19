import { useMemo } from "react";
import "./SectionCard.css";

const SectionCard = ({ pageTitle, iconImageUrl, propTop, propBottom }) => {
  const groupDiv14Style = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div className="group-parent18" style={groupDiv14Style}>
      <div className="rectangle-parent97">
        <div className="group-child127" />
        <img
          className="mingcutedown-fill-icon24"
          alt=""
          src="/mingcutedownfill1.svg"
        />
        <div className="your-shop4">{pageTitle}</div>
      </div>
      <div className="rectangle-parent98">
        <div className="group-child128" />
        <img className="mdishop-outline-icon" alt="" src={iconImageUrl} />
      </div>
    </div>
  );
};

export default SectionCard;
