import GroupComponent2 from "../AllGroupComponent/GroupComponent2/GroupComponent2";
import "./ItemNameContainer.css";

const ItemNameContainer = () => {
  return (
    <div className="group-wrapper2">
      <div className="instance-container">
        <GroupComponent2
          groupDivPosition="absolute"
          groupDivTop="0px"
          groupDivLeft="0px"
        />
        <GroupComponent2
          groupDivPosition="absolute"
          groupDivTop="112px"
          groupDivLeft="0px"
        />
      </div>
    </div>
  );
};

export default ItemNameContainer;
