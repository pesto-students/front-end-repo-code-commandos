import React,{useState} from "react";
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

export default function HobbyDialog() {
  const [open, setOpen] = React.useState(false);
  const hobbies = FormOption.hobbies;

  const [checkedState, setCheckedState] = useState(
    new Array(hobbies.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleHobbies = () => {
    const UserHobby = checkedState.flatMap((item, index) => {
      // if(item) return hobbies[index].hobby
      
      return item ? hobbies[index].hobby : [];
    });
    // const UserHobbies = UserHobby.filter((item) => {
    //   if (item) return item
    // });
    console.log(UserHobby);
    setOpen(!open);
  };

  const handleOpen = () => setOpen(!open);



  return (
    <>
      <Button onClick={handleOpen} className="flex items-center text-sm font-bold justify-center rounded-xl border-solid border-2 w-72 h-12 text-bg_dark dark:text-bg_light bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark">Select Hobbies & Interest</Button>
      <Dialog open={open} handler={handleOpen} className=" bg-card_light dark:bg-card_dark">
        <DialogHeader className=" text-bg_dark dark:text-bg_light">Hobbies & Interest</DialogHeader>
        <DialogBody divider className="h-[25rem] md:h-[35rem] overflow-scroll bg-bg_light  dark:bg-bg_dark/70">
          <List className="flex flex-col md:flex-row flex-wrap w-full gap-0">
            {hobbies.map(({ hobby }, index) => {
              return (
                <ListItem
                  className="p-0 w-full md:w-1/4 dark:hover:bg-bg_dark/70 dark:focus:bg-bg_dark/70"
                  key={index}
                  name={hobby}
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
                        value={hobby}
                        name={hobby}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        className="hover:before:opacity-0 checked:bg-button_light dark:checked:bg-button_dark checked:border-0 "
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography className="text-sm lg:font-medium lg:text-base text-bg_dark dark:text-bg_light">
                      {hobby}
                    </Typography>
                  </label>
                </ListItem>
              );
            })}
          </List>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="" onClick={handleOpen} className=" border-bg_dark text-bg_dark dark:border-bg_light dark:text-bg_light">
            close
          </Button>
          <Button variant="solid" color="" onClick={handleHobbies} className="text-bg_dark dark:text-bg_light bg-button_light dark:bg-button_dark">
            Save changes
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
