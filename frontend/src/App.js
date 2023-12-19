import { Routes, Route, useParams} from "react-router-dom";
import InternationalContractors from "./pages/InternationalContractor/InternationalContractors";
import SpecialContractors from "./pages/SpecialContactors/SpecialContactor2/SpecialContractors";
import AfterTapItem from "./pages/AfterTapItem/AfterTapItem";
import Shop from "./pages/Shop/Shop";
import JobSeeker2 from "./pages/JobSeeker/JobSeeker2/JobSeeker2";
import JobSeeker1 from "./pages/JobSeeker/JobSeeker1/JobSeeker1";
import SubContractors from "./pages/SubContactor/SubContractors";
import JobVacancies from "./pages/JobVacancy/JobVacancies";
import Help from "./pages/Help/Help";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import AddShopItem from "./pages/AddShop/AddShopItem";
import AddShopItem1 from "./pages/AddShopItem/AddShopItem1";
import AddYourShop from "./pages/AddYourShop/AddYourShop";
import Applications from "./pages/Application/Applications";
import ShopsItemsRentMachine from "./pages/ShopRentMachine/ShopsItemsRentMachine";
import ShopsItemsCategory from "./pages/ShopItem/ShopsItemsCategory";
import YourCourse from "./pages/YourCourse/YourCourse";
import YourCourse1 from "./pages/YourCourse/YourCourse1";
import HireMe from "./pages/HireMe/HireMe";
import HireMe1 from "./pages/HireMe1/HireMe1";
import YourJobVacancies1 from "./pages/YourJobVacancy/YourJobVacancy1/YourJobVacancies1";
import YourJobVacancies2 from "./pages/YourJobVacancy/YourJobVacancy2/YourJobVacancies2";
import YourShop from "./pages/YourShop/YourShop";
import ActivatedPackage from "./pages/ActivatedPackage/ActivatedPackage";
import PersonalInformation from "./pages/PersionalInfo/PersonalInformation";
import RequestAdvertisement from "./pages/RequestAdvertise/RequestAdvertisement";
import Profile from "./pages/Profile/Profile";
import JobVacancies1 from "./pages/JobVacancy/JobVacancy1/JobVacancies1";
import EducationCourses from "./pages/EducationCourse/EducationCourses";
import InternationalContractors1 from "./pages/InternationalContractor1/InternationalContractors1";
import SpecialContractors1 from "./pages/SpecialContactors/SpecialContactor1/SpecialContractors1";
import HomeRentMachinesOther from "./pages/HomeRentMAchine/HomeRentMachinesOther";
import Verification from "./pages/Verifications/Verification1/Verification";
import Verification1 from "./pages/Verifications/Verification2/Verification1";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SignIn from "./pages/SignIn/SignIn";
import RegisterAccount from "./pages/Register/RegisterAccount";
import Onboarding from "./pages/Onboarding/Onboarding";
import Onboarding1 from "./pages/Onboarding/Onboarding1";
import Onboarding2 from "./pages/Onboarding/Onboarding2";
import Start from "./pages/Start/Start";
import Notification1 from "./pages/Notification/Notification1";
import Home from "./pages/Home/Home"
import Frame from "./components/Frame/Frame/Frame";
import Frame1 from "./components/Frame/Frame1/Frame1";
import Frame2 from "./components/Frame/Frame2/Frame2";
import Frame3 from "./pages/Frame3/frame3";


function App() {


  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/onboarding1" element={<Onboarding1 />} />
      <Route path="/onboarding2" element={<Onboarding2 />} />
      <Route path="/register-account" element={<RegisterAccount />} />
      <Route path="/sign-in" element={<SignIn />} /> 
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/verification1" element={<Verification1 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/your-job-vacancies1" element={<YourJobVacancies2 />} /> 
      <Route path="/your-job-vacancies" element={<YourJobVacancies1 />} />
      <Route path="/special-contractors" element={<SpecialContractors1 />} />
      <Route path="/special-contractors1" element={<SpecialContractors />} />
      <Route path="/international-contractors"element={<InternationalContractors1 />}/>
      <Route path="/international-contractors1" element={<InternationalContractors />}/>
      <Route path="/sub-contractors" element={<SubContractors />} />
      <Route path="/job-seeker" element={<JobSeeker1 />} />
      <Route path="/job-seeker1" element={<JobSeeker2 />} />
      <Route path="/after-tap-item" element={<AfterTapItem />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/job-vacancies1" element={<JobVacancies />} />
      <Route path="/job-vacancies" element={<JobVacancies1 />} />
      <Route path="/help" element={<Help />} />
      <Route path="/persional-information" element={<PersonalInformation />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/add-shop-item1" element={<AddShopItem />} />
      <Route path="/add-shop-item" element={<AddShopItem1 />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/shops-items-rent-machine" element={<ShopsItemsRentMachine />}/>
      <Route path="/shops-items-category" element={<ShopsItemsCategory />} />
      <Route path="/your-course" element={<YourCourse1 />} />
      <Route path="/your-course1" element={<YourCourse />} />
      <Route path="/hire-me1" element={<HireMe />} />
      <Route path="/hire-me" element={<HireMe1 />} />        
      <Route path="/your-shop" element={<YourShop />} />
      <Route path="/add-your-shop" element={<AddYourShop />} />
      <Route path="/activated-package" element={<ActivatedPackage />} />
      <Route path="/request-advertisement" element={<RequestAdvertisement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/education-courses" element={<EducationCourses />} />
      <Route path="/home-rent-machines-other" element={<HomeRentMachinesOther />}/>
      <Route path="/notification" element={<Notification1 />} />
      <Route path="/frame1" element={<Frame/> }/>
      <Route path="/frame" element={<Frame1/> }/>
      <Route path="/frame2" element={<Frame2/> }/>
      <Route path="/frame3" element={<Frame3/> }/>
    </Routes>
  );
}
export default App;
