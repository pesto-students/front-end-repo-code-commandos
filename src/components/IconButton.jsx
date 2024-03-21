import React from "react";

function IconButton({ children, disabled = false}) {
  return disabled ? (
    <button className="text-gray-600" disabled>{children}</button>
  ) : (
    <button>{children}</button>
  );
}

export default IconButton;
