import classNames from 'classnames';
import React from 'react';

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
        'ta:w-full ta:px-[40px] mx-auto w-[1200px] mo:px-[20px]',
      )}
    >
      {children}
    </div>
  );
}

export default Inner;
