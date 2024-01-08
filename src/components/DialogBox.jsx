import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import FormOption from "../FormOptions.json";
import useFormContext from "../../src/hooks/useFormContext";

export default function DialogBox({ id, passedOpen, li, keyType, chipArray }) {
  const { data,handleChange } = useFormContext();
  // const [open, setOpen] = useState(false);
  const list = FormOption[li];

  // useEffect(() => {
  //   if (passedOpen) {
  //     setOpen(!open);
  //   }
  // }, [passedOpen]);

  const [checkedState, setCheckedState] = useState(
    new Array(list?.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState?.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

  };

  const handleHobbies = () => {
    const UserList = checkedState?.flatMap((item, index) => {
      // if(item) return hobbies[index].hobby

      return item ? list[index][keyType] : [];
    });
    // const UserHobbies = UserHobby.filter((item) => {
    //   if (item) return item
    // });
    console.log(UserList);
    
    handleChange({
      target:{
        type:"text",
        id:id,
        value:UserList  
      }  
    });

    chipArray(UserList)
    // setOpen(!open);
    passedOpen[0]();
  };

  const handleOpen = () => {

    // setOpen(!open);
    passedOpen[0]();
  };

  return (
    <>
      <Dialog
        open={passedOpen[1]}
        handler={handleOpen}
        className=" bg-card_light dark:bg-card_dark"
      >
        <DialogHeader className=" text-bg_dark dark:text-bg_light">
          {li.toUpperCase()}
        </DialogHeader>
        <DialogBody
          divider
          className="h-[25rem] md:h-[35rem] overflow-scroll bg-bg_light  dark:bg-bg_dark/70"
        >
          <List className="flex flex-col md:flex-row flex-wrap w-full gap-0">
            {list?.map((listElement, index) => {
              return (
                <ListItem
                  className="p-0 w-full md:w-1/4 dark:hover:bg-bg_dark/70 dark:focus:bg-bg_dark/70"
                  key={index}
                  name={listElement[keyType]}
                  id={index}
                  ripple={false}
                >
                  <label
                    htmlFor="horizontal-list-react"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Checkbox
                        key={index}
                        id={index}
                        ripple={false}
                        value={listElement[keyType]}
                        name={listElement[keyType]}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        className="hover:before:opacity-0 checked:bg-button_light dark:checked:bg-button_dark checked:border-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography className="text-sm lg:text-base font-medium text-bg_dark dark:text-bg_light">
                      {listElement[keyType]}
                    </Typography>
                  </label>
                </ListItem>
              );
            })}
          </List>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="outlined"
            onClick={handleOpen}
            className=" border-bg_dark text-bg_dark dark:border-bg_light dark:text-bg_light"
          >
            close
          </Button>
          <Button
            onClick={handleHobbies}
            className="bg-button_light dark:bg-button_dark text-bg_dark dark:text-bg_light"
          >
            Save changes
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
