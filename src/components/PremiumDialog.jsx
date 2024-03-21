import React, { Children } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import Button from "../components/Button";
import BuyPlanDialog from "../components/BuyPlanDialog";


function PremiumDialog({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen}>{children}</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className=" bg-card_light/90 dark:bg-card_dark/90"
      >
        <DialogHeader>
          {/* <Typography className="text-font_light" variant="h5">
            Premium Required!
          </Typography> */}
        </DialogHeader>
        <DialogBody className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-16 w-16 text-font_light dark:text-font_dark"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z"
              fill="currentColor"
            ></path>
          </svg>
          <Typography
            className="text-font_light dark:text-font_dark"
            variant="h4"
          >
            Premium feature!
          </Typography>
          <Typography className="text-font_light/70 dark:text-font_dark/70 text-center font-normal">
            You need to buy premium to get access
          </Typography>
        </DialogBody>
        <DialogFooter>
          <div className="flex flex-row w-full gap-4 mx-4">
            {/* <Button variant="text" color="blue-gray" onClick={handleOpen}> */}
              <BuyPlanDialog>Buy</BuyPlanDialog>
            {/* </Button> */}
            <Button variant="gradient" onClick={handleOpen}>
              Close
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default PremiumDialog;
