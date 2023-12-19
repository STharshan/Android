import { useCallback, useState } from "react";
import Frame from "../Frame/Frame1/Frame1";
import PortalPopup from "../Popup/PortalPopup";
import GroupComponent3 from "../AllGroupComponent/GroupComponent3/GroupComponent3";
import "./SectionAllItems.css";
import { useNavigate } from "react-router-dom";

const SectionAllItems = () => {
  
  const navigate = useNavigate();

  const onLocation = useCallback(() => {
    navigate("/frame2");
  }, [navigate]);

  return (
    <div className="frame-parent5">
      <div className="rectangle-parent109">
        <div className="frame-child45" />
        <div className="frame-child46" />
      </div>
      <div className="all-items6">All Items</div>
      <div className="items2">30 items</div>
      <div className="group-child144" />
      <GroupComponent3
        choose="Choose"
        showMingcutedownFillIcon
        groupDivWidth="79.07%"
        groupDivHeight="11.3%"
        groupDivPosition="absolute"
        groupDivTop="57.63%"
        groupDivRight="16.05%"
        groupDivBottom="31.07%"
        groupDivLeft="4.88%"
        groupDivCursor="pointer"
        rectangleDivBorderRadius="6px"
        chooseHeight="39.5%"
        chooseWidth="23.53%"
        chooseFontFamily="Inter"
        chooseColor="#5e5b5b"
        chooseFontWeight="unset"
      />
      <div className="group-child145" />
      <img className="carbonlocation-icon6" alt="" src="/carbonlocation.svg" onClick={onLocation}/>
      <div className="frame-parent6">
        <div className="all-items-wrapper">
          <div className="all-items7">All Items</div>
        </div>
        <div className="power-tools-wrapper">
          <div className="power-tools">Power Tools</div>
        </div>
        <div className="sample-items-wrapper">
          <div className="power-tools">Sample Items</div>
        </div>
        <div className="sample-items1">Sample Items</div>
      </div>
    </div>
  );
};

export default SectionAllItems;
