import React from "react";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div
      className={`h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
