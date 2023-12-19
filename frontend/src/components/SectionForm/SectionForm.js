import { useMemo } from "react";
import "./SectionForm.css";

const SectionForm = ({ groupDivTop }) => {
  const groupDiv20Style = useMemo(() => {
    return {
      top: groupDivTop,
    };
  }, [groupDivTop]);

  return (
    <div className="ellipse-container" style={groupDiv20Style}>
      <img className="group-child141" alt="" src="/ellipse-6@2x.png" />
      <div className="title3">IDIKIRIM</div>
      <div className="desc2">
        Lorem ipsum dolor sit amet, consectetur piscing elit. Vivamus in
        vulputate nisi.
      </div>
      <div className="ellipse-parent1">
        <div className="group-child142" />
        <div className="div39">02</div>
      </div>
      <div className="group-child143" />
    </div>
  );
};

export default SectionForm;
