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
    <div className={classNames(`${className} mx-auto w-[1200px]`)}>
      {children}
    </div>
  );
}

export default Inner;
