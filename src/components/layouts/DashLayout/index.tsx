import { PropsWithChildren } from "react";

const DashLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>Navigation</div>
      <div>{children}</div>
    </div>
  );
};

export default DashLayout;
