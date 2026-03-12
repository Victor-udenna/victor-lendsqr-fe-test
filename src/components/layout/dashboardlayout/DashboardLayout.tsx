import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../../../providers/useSideBar";
import SideBar from "../sidebar/SideBar";
import Header from "../header/Header";
import "./DashboardLayoutStyle.scss";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="dashboard-layout">
        <SideBar />
        <div className="main-content">
          <Header />
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
