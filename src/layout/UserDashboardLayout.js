import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const UserDashboardLayout = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default UserDashboardLayout;
