import { useMemo } from "react";
import "./PersonalInformationSection1.css";

const PersonalInformationSection1 = ({
  groupIconHeight,
  groupIconBottom,
  groupIconCursor,
  onGroupContainerClick,
}) => {
  const groupDiv13Style = useMemo(() => {
    return {
      height: groupIconHeight,
      bottom: groupIconBottom,
      cursor: groupIconCursor,
    };
  }, [groupIconHeight, groupIconBottom, groupIconCursor]);

  return (
    <div
      className="group-parent17"
      style={groupDiv13Style}
      onClick={onGroupContainerClick}
    >
      <img className="group-child125" alt="" src="/group-38138.svg" />
      <div className="personal-information2">Personal Information</div>
      <img className="group-child126" alt="" src="/group-38145.svg" />
    </div>
  );
};

export default PersonalInformationSection1;
