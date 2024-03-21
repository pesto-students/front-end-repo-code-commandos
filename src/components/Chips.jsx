import React from "react";
import { Chip } from "@material-tailwind/react";

export default function Chips({ name }) {
  const handleClose = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Chip
        className="mx-1 text-bg_dark bg-button_light dark:bg-button_dark dark:text-bg_light"
        
        value={name}
        onClose={(e) => {
          handleClose(e);
        }}
      />
    </>
  );
}
