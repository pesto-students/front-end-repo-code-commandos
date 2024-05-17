import React, { useState, useRef, useEffect } from "react";
import "./InputSearch.css";
import useFormContext from "../../hooks/useFormContext";

function InputSearch({ onChangeValue, list, keyType, placeholder, id,value }) {

  const { data,handleChange } = useFormContext();
  const [searchResultOpen, setSearchResultOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState(value);
  const inputsearchRef = useRef();

  const handleKeyPress = (event, results) => {
    if (event.key === "Enter") {
      console.log("Enter Pressed", results);
      handleItemChange(results);
      // setInput(results);
      // setSearchResultOpen(false);
      console.log(results);
      //onChangeValue(results);
    }
  };

  // Close the inputsearch when clicked outside
  const handleClickOutside = (event) => {
    if (
      inputsearchRef.current &&
      !inputsearchRef.current.contains(event.target)
    ) {
      setSearchResultOpen(false);
      // if (!input) {
      //   setInput("");
      // }
    }
  };

  // Attach event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const fetchData = (value) => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const results = json.filter((user) => {
  //         return (
  //           // value && (To keep suggestion div hidden when input deleted completely)
  //           user &&
  //           user.name &&
  //           user.name.toLowerCase().includes(value.toLowerCase())
  //         );
  //       });
  //       setResults(results);
  //     });
  // };

  const fetch = (value) => {
    const results = list.filter((li) => {
      return (
        li &&
        li[keyType] &&
        li[keyType].toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
  };

  const handleClick = (value) => {
    console.log("::: Dropdown clicked!");
    setInput(value);
    fetch(value);
    setSearchResultOpen(true);
  }

  const handleItemChange = (value) => {
    setInput(value);
    if(value){  
      handleChange({
        target:{
          type:"text",
          id:id,
          value:value,
        }
        })
    }
    console.log(data);
    console.log(id);
    // fetchData(value);
    // fetch(value);
    setSearchResultOpen(false);
    // console.log(input)
    // onChangeValue(input)
    // value ? setSearchResultOpen(true) : setSearchResultOpen(false); (To keep suggestion div hidden when input deleted completely)
  };

  return (
    <>
      <div ref={inputsearchRef} className="ml-1 w-full relative flex">
        <input
          id={id}
          type="text"
          className="flex w-full bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
          placeholder={placeholder ? placeholder : "Type Here"}
          value={input || value}
          onClick={(e) => {
            handleClick(e.target.value)
            // handleItemChange(e.target.value);
            // setSearchResultOpen(true);  
          }}
          onChange={(e) => {
            handleItemChange(e.target.value);
          }}
        />
        {searchResultOpen && (
          <div className="top-16 w-full max-h-48 overflow-y-scroll overflow-x-hidden z-10 absolute shadow-md bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark">
            {results.map((result, id) => {
              return (
                <div
                  tabIndex="0"
                  key={id}
                  className="p-2  hover:rounded-lg hover:bg-button_light dark:hover:bg-button_dark focus:rounded-lg focus:bg-button_light dark:focus:bg-button_dark"
                  onClick={() => {
                    setInput(result[keyType]);
                    setSearchResultOpen(false);
                    console.log(result[keyType]);
                    handleItemChange(result[keyType]);
                  }}
                  onKeyDown={(e) => {
                    handleKeyPress(e, result[keyType]);
                  }}
                >
                  {result[keyType]}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default InputSearch;
