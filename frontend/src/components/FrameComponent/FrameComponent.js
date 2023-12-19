import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft, frameDivWidth]);

  return (
    <div className="name-parent" style={frameDivStyle}>
      <div className="name">Name</div>
    </div>
  );
};

export default FrameComponent;
