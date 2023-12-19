import { useMemo } from "react";
import "./GroupComponent2.css";

const GroupComponent2 = ({ groupDivPosition, groupDivTop, groupDivLeft }) => {
  const groupDiv4Style = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div className="rectangle-top" style={groupDiv4Style}>
      <div className="rectangle-div" />
      <img className="rectangle-icon" alt="" src="/rectangle-621@2x.png" />
      <div className="item-name-here-parent">
        <div className="item-name-here">Item Name here</div>
        <div className="rs-0000">Rs. 00.00</div>
      </div>
      <div className="group-container">
        <div className="vector-group">
          <img className="vector-icon1" alt="" src="/vector.svg" />
          <div className="div1">011 7460875</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
