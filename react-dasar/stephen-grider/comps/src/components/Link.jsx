import React from "react";

import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClass }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClass
  );
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    console.log(e);
    e.preventDefault();

    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
