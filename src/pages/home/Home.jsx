import "./Home.css";

import Slider from "./components/Slider/Slider";
import Introduce from "./components/Introduce/Introduce";
import Advisors from "./components/Advisors/Advisors";
import TeamProjects from "./components/TeamProjects/TeamProjects";
import ManagementBoard from "./components/ManagementBoard/ManagementBoard";
import Questions from "./components/FAQ/FAQ";

const HomePage = () => {
  

  return (
    <>
      <Slider/>
      <Introduce/>
      <Advisors/>
      <ManagementBoard/>
      <TeamProjects/>
      <Questions/>
    </>
  );
};
export default HomePage;
