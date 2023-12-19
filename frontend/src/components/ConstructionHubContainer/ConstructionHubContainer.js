import { useMemo } from "react";
import "./ConstructionHubContainer.css";

const ConstructionHubContainer = ({
  locationDescription,
  hubDescription,
  saveAndPrintLeft,
}) => {
  const contentStyle = useMemo(() => {
    return {
      left: saveAndPrintLeft,
    };
  }, [saveAndPrintLeft]);

  return (
    <div className="content" style={contentStyle}>
      <div className="title2">
        <div className="body">
          <div className="save-and-print">{locationDescription}</div>
        </div>
        <b className="all-your-photos">{hubDescription}</b>
      </div>
    </div>
  );
};

export default ConstructionHubContainer;
