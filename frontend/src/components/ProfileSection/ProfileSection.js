import { useMemo } from "react";
import "./ProfileSection.css";

const ProfileSection = ({
  profileImageUrl,
  actionButtonText,
  iconParkrightLeft,
  iconParkrightWidth,
  viewProfileLeft,
  propCursor,
  onVisitStoreTextClick,
}) => {
  const groupDiv6Style = useMemo(() => {
    return {
      left: iconParkrightLeft,
      width: iconParkrightWidth,
    };
  }, [iconParkrightLeft, iconParkrightWidth]);

  const iconParkrightStyle = useMemo(() => {
    return {
      left: viewProfileLeft,
    };
  }, [viewProfileLeft]);

  const viewProfileStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className="rectangle-parent89">
      <div className="group-child115" />
      <div className="group-child116" />
      <img className="group-child117" alt="" src={profileImageUrl} />
      <div className="icon-parkright-parent" style={groupDiv6Style}>
        <img
          className="icon-parkright"
          alt=""
          src="/iconparkright.svg"
          style={iconParkrightStyle}
        />
        <div
          className="view-profile"
          style={viewProfileStyle}
          onClick={onVisitStoreTextClick}
        >
          {actionButtonText}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
