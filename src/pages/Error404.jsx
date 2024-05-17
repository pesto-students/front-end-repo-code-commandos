import React from "react";
import { Typography, Button } from "@material-tailwind/react";

export function Error404() {
  return (
      <div className="h-screen mx-auto grid place-items-center text-center px-8 bg-bg_dark">
        <div>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mt-10 !text-3xl !leading-snug md:!text-4xl"
          >
            Error 404 |  It looks like something went wrong.
          </Typography>

        </div>
      </div>
  );
}

export default Error404;