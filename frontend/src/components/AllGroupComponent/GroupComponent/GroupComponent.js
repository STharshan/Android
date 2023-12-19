import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({ groupDivPosition, groupDivTop, groupDivLeft }) => {
  const groupDivStyle = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div className="rectangle-parent" style={groupDivStyle}>
      <div className="component-child" />
      <img className="component-item" alt="" src="/rectangle-62@2x.png" />
      <div className="contractor-name-here">Contractor Name here</div>
      <div className="roof-design">Roof Design</div>
    </div>
  );
};

export default GroupComponent;
