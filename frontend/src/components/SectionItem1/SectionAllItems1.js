import GroupComponent3 from "../AllGroupComponent/GroupComponent3/GroupComponent3";
import "./SectionAllItems1.css";

const SectionAllItems1 = () => {
  return (
    <div className="frame-parent4">
      <div className="rectangle-parent105">
        <div className="frame-child43" />
        <div className="frame-child44" />
      </div>
      <div className="all-items5">All Items</div>
      <div className="items1">30 items</div>
      <div className="group-child136" />
      <GroupComponent3
        choose="Rent machines"
        showMingcutedownFillIcon
        groupDivWidth="79.07%"
        groupDivHeight="11.3%"
        groupDivPosition="absolute"
        groupDivTop="57.63%"
        groupDivRight="16.05%"
        groupDivBottom="31.07%"
        groupDivLeft="4.88%"
        groupDivCursor="unset"
        rectangleDivBorderRadius="6px"
        chooseHeight="unset"
        chooseWidth="unset"
        chooseFontFamily="Inter"
        chooseColor="#5e5b5b"
        chooseFontWeight="unset"
      />
      <div className="group-child137" />
      <img className="carbonlocation-icon5" alt="" src="/carbonlocation.svg" />
    </div>
  );
};

export default SectionAllItems1;
