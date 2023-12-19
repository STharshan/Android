import GroupComponent3 from "../../components/AllGroupComponent/GroupComponent3/GroupComponent3";
import GroupComponent20 from "../../components/AllGroupComponent/GroupComponent9/GroupComponent20";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./InternationalContractors1.css";
import Footer from "../../components/Footer/footer";

const InternationalContractors1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  return (
    <div className="international-contractors1">
      <div className="rectangle-parent52">
        <div className="frame-child33" />
        <div className="frame-parent1">
          <div className="rectangle-parent53">
            <div className="frame-child34" />
            <div className="frame-child35" />
          </div>
          <div className="all-items3">All Items</div>
          <div className="special-sontractors">30 special sontractors</div>
          <div className="group-child77" />
          <GroupComponent3
            choose="Choose"
            showMingcutedownFillIcon
            groupDivWidth="79.07%"
            groupDivHeight="3.83%"
            groupDivPosition="absolute"
            groupDivTop="19.54%"
            groupDivRight="16.05%"
            groupDivBottom="76.63%"
            groupDivLeft="4.88%"
            groupDivCursor="unset"
            rectangleDivBorderRadius="6px"
            chooseHeight="39.5%"
            chooseWidth="23.53%"
            chooseFontFamily="Inter"
            chooseColor="#5e5b5b"
            chooseFontWeight="unset"
          />
          <div className="group-child78" />
          <img
            className="carbonlocation-icon3"
            alt=""
            src="/carbonlocation.svg"
          />
        </div>
        <GroupComponent20 propLeft="225px" propTop="384px" />
        <GroupComponent20 propLeft="225px" propTop="603px" />
        <GroupComponent20 />
        <GroupComponent20 propLeft="20px" propTop="603px" />
      </div>
      <div className="international-contractors-parent">
        <div className="international-contractors2">
          {" "}
          / International Contractors
        </div>
        <img
          className="material-symbolshome-outline-icon3"
          alt=""
          src="/materialsymbolshomeoutline.svg"
        />
      </div>
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="965px"
        titleInternational="var(--color-goldenrod)"
      />
    </div>
  );
};

export default InternationalContractors1;
