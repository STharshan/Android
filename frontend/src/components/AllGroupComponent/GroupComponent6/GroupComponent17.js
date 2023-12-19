import { useMemo } from "react";
import "./GroupComponent17.css";

const GroupComponent17 = ({ contactNumberTop }) => {
  const groupDiv8Style = useMemo(() => {
    return {
      top: contactNumberTop,
    };
  }, [contactNumberTop]);

  return (
    <div className="rectangle-parent93" style={groupDiv8Style}>
      <div className="component-child2" />
      <div className="item-name-here2">Kamal Siripala</div>
      <div className="rent-machine-type1">Job position</div>
      <div className="contact-number9">Email</div>
      <div className="donload-cv">Download CV</div>
      <div className="contact-number10">Contact Number</div>
    </div>
  );
};

export default GroupComponent17;
