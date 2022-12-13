import React from "react";
import classNames from "classnames";
const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = classNames(rest.className, "px-3 py-1.5 text-white border", {
    "bg-blue-500  border-blue-500": primary,
    "bg-gray-500  border-gray-500": secondary,
    "bg-green-500  border-green-500": success,
    "bg-yellow-400  border-yellow-400": warning,
    "bg-red-500  border-red-500": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-500": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger,
  });

  console.log(rest);
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

// Button.propTypes = {
//   checkVariantValue: ({ primary, secondary, success, warning, danger }) => {
//     const count =
//       Number(!!primary) +
//       Number(!!secondary) +
//       Number(!!warning) +
//       Number(!!success) +
//       Number(!!danger);

//     if (count > 1) {
//       return new Error("Count more than 1");
//     }
//   },
// };
export default Button;
