import React from "react";
import useFormContext from "../hooks/useFormContext";

function InputField({ id, placeholder, type, required, min, max,name,value }) {
  
  const { handleChange } = useFormContext();
  let desc = false;
  if (type == "number") min = 1;
  if (type == "textarea") desc = true;
  return (
    <>
      {required ? (
        desc ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            className={`flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark`}
            rows={4}
            cols={48}
			      onChange={handleChange}
            required
          />
        ) : (
          <input
            type={type}
            id={id}
            min={min}
            max={max}
            value={value}
            className={`flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark`}
            placeholder={placeholder}
            onChange={handleChange}
            required
          />
        )
      ) : (desc ? (
		<textarea
		  id={id}
		  placeholder={placeholder}
		  name={name}
      value={value}
		  className={`flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark`}
		  rows={4}
		  cols={40}
		  onChange={handleChange}
		  required
		/>
	  ) :(
        <input
          type={type}
          id={id}
          min={min}
          max={max}
          valu={value}
          name={name}
          className="flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
          placeholder={placeholder}
          onChange={handleChange}
        />
      ))}
    </>
  );
}

export default InputField;
