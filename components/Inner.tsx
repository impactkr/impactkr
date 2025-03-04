import classNames from "classnames";
import React from "react";

function Inner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        className,
        "mx-auto max-w-[1400px] ta:w-full ta:px-[40px] mo:px-[20px]",
      )}
    >
      {children}
    </div>
  );
}

export default Inner;
