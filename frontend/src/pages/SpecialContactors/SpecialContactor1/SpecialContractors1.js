import GroupComponent3 from "../../../components/AllGroupComponent/GroupComponent3/GroupComponent3";
import Product2 from "../../../components/AllProduct/Product2/Product2";
import HeaderIcon from "../../../components/Header/HeaderIcon";
import "./SpecialContractors1.css";
import Footer from "../../../components/Footer/footer";

const SpecialContractors = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  return (
    <div className="special-contractors1">
      <div className="rectangle-parent54">
        <div className="rectangle2" />
        <div className="frame-child36" />
        <div className="frame-parent2">
          <div className="rectangle-parent55">
            <div className="frame-child37" />
            <div className="frame-child38" />
          </div>
          <div className="all-items4">All Items</div>
          <div className="special-sontractors1">30 special sontractors</div>
          <div className="group-child79" />
          <GroupComponent3
            choose="Special Contractors"
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
            chooseHeight="unset"
            chooseWidth="unset"
            chooseFontFamily="Inter"
            chooseColor="#5e5b5b"
            chooseFontWeight="unset"
          />
          <div className="group-child80" />
          <img
            className="carbonlocation-icon4"
            alt=""
            src="/carbonlocation.svg"
          />
        </div>
        <Product2 />
        <Product2 propTop="596px" propLeft="20px" />
        <Product2 propTop="384px" propLeft="225px" />
        <Product2 propTop="596px" propLeft="225px" />
      </div>
      <div className="special-contractors-parent">
        <div className="special-contractors2"> / Special Contractors</div>
        <img
          className="material-symbolshome-outline-icon4"
          alt=""
          src="/materialsymbolshomeoutline.svg"
        />
      </div>
      <HeaderIcon />
      <Footer
        footerTopmargin="900px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        titleHome="var(--color-goldenrod)"
      />
    </div>
  );
};

export default SpecialContractors;
