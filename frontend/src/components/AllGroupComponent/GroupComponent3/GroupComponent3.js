import { useCallback, useMemo } from "react";
import "./GroupComponent3.css";
import { useNavigate } from "react-router-dom";

const GroupComponent3 = ({
  choose,
  showMingcutedownFillIcon,
  groupDivWidth,
  groupDivHeight,
  groupDivPosition,
  groupDivTop,
  // groupDivRight,
  // groupDivBottom,
  groupDivLeft,
  groupDivCursor,
  rectangleDivBorderRadius,
  chooseHeight,
  chooseWidth,
  chooseFontFamily,
  chooseColor,
  chooseFontWeight,
}) => {
  const groupDiv5Style = useMemo(() => {
    return {
      width: groupDivWidth,
      height: groupDivHeight,
      position: groupDivPosition,
      top: groupDivTop,
      // right: groupDivRight,
      // bottom: groupDivBottom,
      left: groupDivLeft,
      cursor: groupDivCursor,
    };
  }, [
    groupDivWidth,
    groupDivHeight,
    groupDivPosition,
    groupDivTop,
    // groupDivRight,
    // groupDivBottom,
    groupDivLeft,
    groupDivCursor,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
    };
  }, [rectangleDivBorderRadius]);

  const chooseStyle = useMemo(() => {
    return {
      height: chooseHeight,
      width: chooseWidth,
      fontFamily: chooseFontFamily,
      color: chooseColor,
      fontWeight: chooseFontWeight,
    };
  }, [
    chooseHeight,
    chooseWidth,
    chooseFontFamily,
    chooseColor,
    chooseFontWeight,
  ]);

  const navigate = useNavigate();

  const gotoOption = useCallback(() => {
    navigate("/frame");
  }, [navigate]);
  


  return (
    <div className="rectangle-wrapper" style={groupDiv5Style}>
      <div className="component-child1" style={rectangleDivStyle} onClick={gotoOption}/>
      <div className="choose" style={chooseStyle}>
        {choose}
      </div>
      <img className="iconamoonsearch" alt="" src="/iconamoonsearch.svg" />
      {showMingcutedownFillIcon && (
        <img
          className="mingcutedown-fill-icon"
          alt=""
          src="/mingcutedownfill.svg"
        />
      )}
      <select>
        <option></option>
      </select>
    </div>
  );
};

export default GroupComponent3;
