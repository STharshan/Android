import HeaderIcon from "../../components/Header/HeaderIcon";
import SectionForm from "../../components/SectionForm/SectionForm";
import "./Notification1.css";
import Footer from "../../components/Footer/footer";

const Notification1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";


  return (
    <div className="notification">
      <HeaderIcon />
      <div className="notifications-wrapper">
        <b className="notifications">Notifications</b>
      </div>
      <SectionForm />
      <SectionForm groupDivTop="282px" />
      <div className="ellipse-parent">
        <img className="group-child109" alt="" src="/ellipse-6@2x.png" />
        <div className="title">IDIKIRIM</div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur piscing elit. Vivamus in
          vulputate nisi.
        </div>
        <div className="line-div" />
      </div>
      <div className="ellipse-group">
        <img className="group-child109" alt="" src="/ellipse-6@2x.png" />
        <div className="title">IDIKIRIM</div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur piscing elit. Vivamus in
          vulputate nisi.
        </div>
      </div>
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="800px"

      />
    </div>
  );
};

export default Notification1;
