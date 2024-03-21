import React from "react";

function Button({ children, type, visible, onClick, disabled, id, noBorder }) {
  return (
    <button
      id={id}
      className={`flex p-2 rounded-xl border-solid ${noBorder?"border-0":"border-2"} text-bg_dark dark:text-bg_light w-full h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${visible}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
