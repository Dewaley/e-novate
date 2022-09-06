import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

const UserDashboardLayout = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default UserDashboardLayout