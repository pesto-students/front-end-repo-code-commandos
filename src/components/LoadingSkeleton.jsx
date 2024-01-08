import React from "react";
import CarouselDefault from "./CarouselDefault";
import Button from "./Button";
import { Typography } from "@material-tailwind/react";

function LoadingSkeleton() {
  return (
    <>
      <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-2 md:overflow-scroll md:max-h-[82vh]">
        {/* 1st Column (Span - 1)*/}
        <div className="md:px-4 md:col-span-2 lg:col-span-1">
          <div className="h-full w-full animate-pulse">

            <div className="flex md:h-[88vh] lg:h-5/6 w-full items-center justify-center rounded-lg bg-button_light/60 dark:bg-button_dark/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-button_light/90 dark:text-button_dark/60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="md:mt-4 md:flex md:gap-4"></div>
        </div>

        {/* 2nd Column (Span - 2)*/}
        <div className=" max-h-[82vh] md:col-span-2 mx-4 flex flex-col gap-6 dark:text-bg_light text-bg_dark lg:overflow-scroll">
          {/* Name, Location & Horoscope */}
          <div className="flex flex-col animate-pulse gap-0">
            <Typography
              as="div"
              variant="h1"
              className="mb-4 h-3 w-full rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-5/6 rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-5/6 rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
          </div>

          {/* Short Cards */}

          {/* Description */}
          <div className=" animate-pulse">
            <Typography
              as="div"
              variant="h1"
              className="mb-4 h-3 w-full rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-5/6 rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-5/6 rounded-full bg-button_light/60 dark:bg-button_dark/30"
            >
              &nbsp;
            </Typography>
          </div>

          {/* Detailed Cards */}
          <div className="grid lg:grid-cols-2 gap-4 auto-rows-auto animate-pulse">
            {/* Place of Birth */}
            <div className="flex flex-col gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
            </div>
            {/* Lifestyle */}
            <div className="flex flex-col gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
            </div>
            {/* Place of Birth */}
            <div className="flex flex-col gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
            </div>
            {/* Lifestyle */}
            <div className="flex flex-col gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
            </div>
            {/* Education*/}
            <div className="flex flex-col gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
            </div>
            {/* Background */}
            <div className="flex flex-col gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
            </div>
            {/* Annual Income */}
            {
              <div className="flex flex-col gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
                <Typography
                  as="div"
                  variant="h1"
                  className="mb-4 h-3 w-56 rounded-full bg-button_light/60 dark:bg-button_dark/30"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
                >
                  &nbsp;
                </Typography>
              </div>
            }

            {/* Family Type */}
            <div className="flex flex-col gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-72 rounded-full bg-button_light/60 dark:bg-button_dark/30"
              >
                &nbsp;
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingSkeleton;
