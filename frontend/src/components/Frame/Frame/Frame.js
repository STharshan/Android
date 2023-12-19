import { useCallback } from "react";
import GroupComponent3 from "../../AllGroupComponent/GroupComponent3/GroupComponent3";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onotherClick = useCallback(() => {
    navigate("/home-rent-machines-other");
  }, [navigate]);

  const onspecialClick = useCallback(() => {
    navigate("/special-contractors");
  }, [navigate]);

  const onsubClick = useCallback(() => {
    navigate("/sub-contractors");
  }, [navigate]);

  const onjobClick = useCallback(() => {
    navigate("/job-seeker");
  }, [navigate]);

  const gotoMainOption = useCallback(() => {
    navigate("/frame");
  }, [navigate]);

  const onMingcutedownFillIcon11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="group-root">
      <div className="instance-parent">
        <GroupComponent3
          choose="Choose"
          showMingcutedownFillIcon={false}
          groupDivWidth="100%"
          groupDivHeight="8.33%"
          groupDivPosition="absolute"
          groupDivTop="0%"
          groupDivRight="0%"
          groupDivBottom="91.67%"
          groupDivLeft="0%"
          groupDivCursor="unset"
          rectangleDivBorderRadius="var(--br-7xs) var(--br-7xs) 0px 0px"
          chooseHeight="39.5%"
          chooseWidth="23.53%"
          chooseFontFamily="Inter"
          chooseColor="#5e5b5b"
          chooseFontWeight="unset"
        />
        <div className="group-parent9">
          <div className="rectangle-parent57">
            <div className="group-child81" />
            <div className="categorises">Categorises</div>
          </div>
          <div className="rectangle-parent58">
            <div className="group-child82"  onClick={gotoMainOption}/>
            <div className="rent-machines1" >Rent Machines</div>
          </div>
          <div className="rectangle-parent59">
            <div className="group-child83" />
            <div className="heavy-machinery">Heavy Machinery</div>
          </div>
          <div className="rectangle-parent60">
            <div className="group-child83" />
            <div className="heavy-machinery">JCB</div>
          </div>
          <div className="rectangle-parent61">
            <div className="group-child83" />
            <div className="heavy-machinery">Equipment</div>
          </div>
          <div className="rectangle-parent62">
            <div className="group-child83" />
            <div className="heavy-machinery">Excavator</div>
          </div>
          <div className="rectangle-parent63">
            <div className="group-child83" />
            <div className="heavy-machinery">Portable Machines</div>
          </div>
          <div className="rectangle-parent64" onClick={onotherClick}>
            <div className="group-child83" />
            <div className="heavy-machinery">Other</div>
          </div>
          <div className="rectangle-parent65">
            <div className="group-child83" />
            <div className="categorises">Special Contractors</div>
          </div>
          <div className="rectangle-parent66">
            <div className="group-child83" />
            <div className="categorises">Sub Contractors</div>
          </div>
          <div className="rectangle-parent67">
            <div className="group-child83" />
            <div className="categorises">Job Seekers</div>
          </div>
          <img
            className="mingcutedown-fill-icon7"
            alt=""
            src="/mingcutedownfill2.svg"
            
          />
          <img
            className="mingcutedown-fill-icon8"
            alt=""
            src="/mingcutedownfill3.svg"
          />
          <img
            className="mingcutedown-fill-icon9"
            alt=""
            src="/mingcutedownfill3.svg"
          />
          <img
            className="mingcutedown-fill-icon10"
            alt=""
            src="/mingcutedownfill3.svg"
          />
          <img
            className="mingcutedown-fill-icon11"
            alt=""
            src="/mingcutedownfill3.svg"
          />
          <img
            className="mingcutedown-fill-icon12"
            alt=""
            src="/mingcutedownfill3.svg"
          />
          <img
            className="mingcutedown-fill-icon13"
            alt=""
            src="/mingcutedownfill3.svg"
          />
          <img className="group-icon1" alt="" src="/group.svg" />
          <img
            className="mingcutedown-fill-icon14"
            alt=""
            src="/mingcutedownfill4.svg"
            onClick={onspecialClick}
          />
          <img
            className="mingcutedown-fill-icon15"
            alt=""
            src="/mingcutedownfill4.svg"
            onClick={onsubClick}
          />
          <img
            className="mingcutedown-fill-icon16"
            alt=""
            src="/mingcutedownfill4.svg"
            onClick={onjobClick}
          />
        </div>
      </div>
      <img
        className="mingcutedown-fill-icon17"
        alt=""
        src="/mingcutedownfill5.svg"
        onClick={onMingcutedownFillIcon11Click}
      />
    </div>
  );
};

export default Frame;
