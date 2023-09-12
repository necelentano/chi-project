import DashLayout from "../../components/layouts/DashLayout";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <DashLayout>
      <Outlet />
    </DashLayout>
  );
}

export default Dashboard;
