import React, { ReactNode } from "react";

const PathBox = ({ children }: { children: ReactNode | string }) => {
  return (
    <div className="py-1.5 px-2.5 bg-gray-200 border-0 rounded-md w-max h-max">
      <code>{children}</code>
    </div>
  );
};

export default PathBox;
