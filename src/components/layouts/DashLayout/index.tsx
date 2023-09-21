import { PropsWithChildren } from "react";

import { useLogOutMutation } from "../../../store/firebaseApi";
import { Link } from "react-router-dom";

const DashLayout = ({ children }: PropsWithChildren) => {
  const [logout] = useLogOutMutation();
  return (
    <div>
      <div>Navigation</div>
      {/* Temporary  */}
      <div
        onClick={logout}
        style={{
          padding: "10px",
          width: "200px",
          backgroundColor: "green",
          cursor: "pointer",
        }}
      >
        LogOut
      </div>
      <div>
        <Link to="tickets">Tickets</Link>
      </div>
      <div>
        <Link to="settings">Settings</Link>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default DashLayout;
