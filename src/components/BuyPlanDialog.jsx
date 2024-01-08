import React, { Children } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import Button from "./Button";
import PlansCard from "../components/PlansCard";

function BuyPlanDialog({ children, noBorder }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen} noBorder={noBorder}>
        {children}
      </Button>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className=" bg-card_light/90 dark:bg-card_dark/90 py-4"
      >
        <DialogHeader className=" justify-center">
          <Typography
            className="text-font_light dark:text-font_dark"
            variant="h4"
          >
            Our Premium Plans
          </Typography>
        </DialogHeader>

        <DialogBody className="grid place-items-center gap-4 overflow-x-scroll">
          <div className="flex gap-8 ">
            <PlansCard type="Free" active={true} />
            <PlansCard type="Premium" active={false} />
          </div>
        </DialogBody>
        <DialogFooter>
          <div className="flex flex-row w-full gap-4 mx-4">
            <Button variant="gradient" onClick={handleOpen}>
              Close
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default BuyPlanDialog;
