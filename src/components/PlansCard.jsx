import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3 text-bg_dark dark:text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function PlansCard({ type, active }) {
  return (
    <Card
      variant="gradient"
      className={`w-full max-w-[20rem] p-8 ${
        active ? "border-4" : "border-1"
      } bg-button_light/70 dark:bg-button_dark`}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-semibold text-xl uppercase text-bg_dark dark:text-white"
        >
          {type}
        </Typography>
        <Typography
          variant="h1"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal text-bg_dark dark:text-white"
        >
          <span className="mt-2 text-4xl">₹</span>
          {type == "Free" ? "00" : "29"}{" "}
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4 text-bg_dark dark:text-white">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Unlimited Match</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Messaging</Typography>
          </li>
          <li className="flex items-center gap-4">
          {type == "Free" ? (
              <Typography className="font-normal">
                {/* <s>Preference Editor</s> */}
              </Typography>
            ) : (
              <>
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Preference Editor
                </Typography>
              </>
            )}
          </li>
          <li className="flex items-center gap-4">
          {type == "Free" ? (
              <Typography className="font-normal">
                {/* <s>Audio Video Call</s> */}
              </Typography>
            ) : (
              <>
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Audio Video Call
                </Typography>
              </>
            )}
          </li>
          <li className="flex items-center gap-4">
            {type == "Free" ? (
              <Typography className="font-normal">
                {/* <s>Astro-Match</s> */}
              </Typography>
            ) : (
              <>
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Astro-Match
                </Typography>
              </>
            )}
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className={`hover:scale-[1.02] focus:scale-[1.02] active:scale-100 ${
            active ? "hidden" : ""
          }`}
          ripple={false}
          fullWidth={true}
          disabled={active ? true : false}
        >
          {active ? "Active" : "Buy Now"}
        </Button>
      </CardFooter>
    </Card>
  );
}
