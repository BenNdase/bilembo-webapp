import React, { PropsWithChildren } from "react";
import type { ReactNode } from "react";

export type Props = {
  className?: string;
  children: ReactNode;
};

const BaseContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`px-5 py-5 md:px-16 lg:px-20 ${className}`}>{children}</div>
  );
};

export default BaseContainer;
