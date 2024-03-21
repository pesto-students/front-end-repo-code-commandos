import React, { useState } from "react";
import DialogBox from "./DialogBox";
import Chips from "./Chips";

function InputChip({ id, onChangeValue, list, keyType, value }) {
  const [chips, setChips] = useState(value || []);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  console.log(list);
  return (
    <div className="ml-1 w-full">
      <div
        className="flex overflow-x-scroll h-12 max-h-12 w-full bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark text-opacity-60"
        onClick={() => handleOpen()}
      >
        {(Array.isArray(chips) && !chips.length) || chips == undefined
          ? "Select"
          : chips?.map((chip, index) => {
              return <Chips name={chip} />;
            })}
      </div>

      <DialogBox
        id={id}
        passedOpen={[handleOpen, open]}
        li={list}
        keyType={keyType}
        chipArray={setChips}
      />
    </div>
  );
}

export default InputChip;
