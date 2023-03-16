import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/Sidebar";
import Header from "../components/Header";
import PRs from "../components/PRs";
import WODs from "../components/WODs";
import Moodboard from "../components/Moodboard";

const Dashboard = () => {
  return (
    <div>
      <Outlet />
      <div className="components--wrapper">
        <Header />
        <SidebarComponent />
        <div className="main--functionality__container">
          <WODs />
          <PRs />
          <Moodboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
