import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const Settings = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>Settings Page</div>
      <div>
        <Link to="reset-password">Reset Password on Settings Page</Link>
      </div>
      {children}
    </div>
  );
};

export default Settings;
