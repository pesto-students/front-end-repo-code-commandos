import React, { useEffect, useState } from "react";
import CarouselDefault from "./CarouselDefault";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ButtonGroup, Typography, Alert } from "@material-tailwind/react";
import { Navigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Feed({ children }) {
  console.log(children);
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("User request sent");
  const dob = new Date(Date.parse(children.dob)).toLocaleDateString();

  const handleAstro = () => {
    localStorage.setItem("partnerHoroscope", children.horoscope);
    localStorage.setItem("partnerImage", (children.profileImage && null));
    navigate("/astromatch");
  };

  const handleFavourite = async () => {
    // console.log();
    const token = localStorage.getItem("token")
    try {
      const result = await axios.post(
        `https://match-made-back.onrender.com/user/set-favourite`,
        { favouriteUserId: children._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        }
      );
      setTimeout(() => {
        setAlertContent("Saved to favourites ");
        setAlertOpen(true);
      }, 200);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequest = async () => {
    const token = localStorage.getItem("token")
    try {
      const result = await axios.post(
        `https://match-made-back.onrender.com/friends/send-request`,
        { receiverId: children._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        }
      );
      setTimeout(() => {
        setAlertContent("Request Sent");
        setAlertOpen(true);
      }, 200);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => handleAstro(),[]);

  return (
    <>
      {/* Grid - 3 Columns */}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-2 md:overflow-scroll md:max-h-[82vh]">
        {/* 1st Column (Span - 1)*/}
        <div className="md:px-4 md:col-span-2 lg:col-span-1">
          <div className="flex">
            <CarouselDefault images={[children.profileImage]} />
          </div>
          <div className="md:mt-4 md:flex md:gap-4">
            <div className="md:h-12 md:w-full">
              <Button onClick={handleFavourite} id={children._id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Button>
            </div>
            {/* AstroButton */}
            <div className="md:h-12 md:w-full">
              <Button onClick={handleAstro}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </Button>
            </div>
            <div className="md:h-12 md:w-full">
              <Button onClick={handleRequest} id={children._id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <Alert
              open={alertOpen}
              onClose={() => setAlertOpen(false)}
              color="white"
              animate={{
                mount: { y: 0 },
                unmount: { y: 100 },
              }}
            >
              {alertContent}
              <Link to="/chat-request" preventScrollReset={true}>
                <span className="mx-4 py-1 px-4 bg-white/20 hover:bg-white/25 rounded-2xl">
                  view
                </span>
              </Link>
            </Alert>
          </div>
        </div>

        {/* 2nd Column (Span - 2)*/}
        <div className="md:max-h-[82vh] md:col-span-2 mx-4 flex flex-col gap-6 dark:text-bg_light text-bg_dark lg:overflow-scroll">
          {/* Name, Location & Horoscope */}
          <div className="flex flex-col gap-0">
            <p class="text-4xl mt-2 font-semibold text-black/80 dark:text-bg_light">
              {children.firstName + " " + children.lastName}
            </p>
            <p class="text-lg font-light text-black/70 dark:text-bg_light/70">
              {children.city},{children.state}
            </p>
            <p class="text-lg text-black/70 dark:text-bg_light/70">{dob}</p>
          </div>

          {/* Short Cards */}
          <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 gap-4">
            <div className="flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
              <p className="text-xs dark:text-bg_light/60">Age</p>
              <h2 className="text-2xl">{children.age}</h2>
            </div>
            <div className="flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
              <p className="text-xs dark:text-bg_light/60">Height</p>
              <h2 className="text-2xl">{children.height}</h2>
            </div>
            <div className="col-span-2 flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
              <p className="text-xs dark:text-bg_light/60">Caste</p>
              <h2 className="text-2xl">
                {children.community} - {children.religion}
              </h2>
            </div>
            <div className="col-span-2 flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
              <p className="text-xs dark:text-bg_light/60">Maritial Status</p>
              <h2 className="text-2xl">{children.maritialStatus}</h2>
            </div>
            <div className="col-span-2 flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
              <p className="text-xs dark:text-bg_light/60">Mother Tongue</p>
              <h2 className="text-2xl">{children.motherTongue}</h2>
            </div>
          </div>

          {/* Description */}
          <div className="">
            <Typography variant="h5">Description</Typography>
            <Typography variant="small" className="mt-2">
              {children.profileDescription}
            </Typography>
          </div>

          {/* Detailed Cards */}
          <div className="grid lg:grid-cols-2 gap-4 auto-rows-auto">
            {/* Living In */}
            <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className=" fill-button_light dark:fill-bg_light/10"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              <div className="flex flex-col">
                <p className="text-xs dark:text-bg_light/60">Living In</p>
                <Typography variant="h5" className="md:text-base lg:text-xl">
                  {children.city}
                </Typography>
              </div>
            </div>

            {/* Place of Birth */}
            <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <svg
                fill="none"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className=" fill-button_light dark:fill-bg_light/10"
              >
                <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
              </svg>
              <div className="flex flex-col">
                <p className="text-xs dark:text-bg_light/60">
                  Place of Birth (Belongs from)
                </p>
                <Typography variant="h5" className="md:text-base lg:text-xl">
                  {children.pob}
                </Typography>
              </div>
            </div>
            {/* Lifestyle */}
            <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <svg
                fill="none"
                width="50px"
                height="50px"
                viewBox="0 -3.84 122.88 122.88"
                version="1.1"
                className="fill-button_light dark:fill-bg_light/10"
              >
                <g>
                  <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z" />
                </g>
              </svg>
              <div className="flex flex-col">
                <p className="text-xs dark:text-bg_light/60">Diet</p>
                <Typography variant="h5" className="md:text-base lg:text-xl">
                  {children.diet}
                </Typography>
              </div>
            </div>
            {/* Education*/}
            <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <svg
                fill="none"
                width="50px"
                height="50px"
                viewBox="0 0 14 14"
                className=" fill-button_light dark:fill-bg_light/10"
              >
                <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" />
              </svg>
              <div className="flex flex-col justify-between">
                <p className="text-xs dark:text-bg_light/60">Education</p>
                <Typography variant="h5">{children.qualification}</Typography>
                {/* <Typography variant="h5">{children.motherTongue}</Typography> */}
              </div>
            </div>
            {/* Profession */}
            <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="50px"
                width="50px"
                viewBox="0 0 24 24"
                version="1.1"
                className=" fill-button_light dark:fill-bg_light/10"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
              </svg>

              <div className="flex flex-col justify-between">
                <p className="text-xs dark:text-bg_light/60">Profession</p>
                <Typography variant="h5">{children.profession}</Typography>
              </div>
            </div>
            {/* Annual Income */}
            {children.annualIncome && (
              <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
                <svg
                  fill="none"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  className=" fill-button_light dark:fill-bg_light/10"
                >
                  <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z"></path>
                </svg>
                <div className="flex flex-col">
                  <p className="text-xs dark:text-bg_light/60">Annual Income</p>
                  <Typography variant="h5" className="md:text-base lg:text-xl">
                    {children.annualIncome}
                  </Typography>
                </div>
              </div>
            )}

            {/* Family Type */}
            <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <svg
                fill="none"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className=" fill-button_light dark:fill-bg_light/10"
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"></path>
              </svg>
              <div className="flex flex-col">
                <p className="text-xs dark:text-bg_light/60">Family Type</p>
                <Typography variant="h5" className="md:text-base lg:text-xl">
                  {children.familyType}
                </Typography>
              </div>
            </div>

            <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
              <svg
                fill="none"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className=" fill-button_light dark:fill-bg_light/10"
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"></path>
              </svg>
              <div className="flex flex-col">
                <p className="text-xs dark:text-bg_light/60">Hobbies</p>
                <Typography variant="h5" className="md:text-base lg:text-xl">
                  {children.hobby.join(", ")}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
