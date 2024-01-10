import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import BuyPlanDialog from "../components/BuyPlanDialog";
import {
  Avatar,
  ThemeProvider,
  Typography,
  ButtonGroup,
  Card,
  CardFooter,
  CardBody,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import Button from "../components/Button";
import { useCookies } from "react-cookie";
import axios from "axios";
import AstroCardButton from "../components/AstroMatch/AstroCardButton";
import { host } from "../utils/APIRoutes";

const theme = {
  avatar: {
    valid: {
      sizes: ["xxxl"],
    },
    styles: {
      sizes: {
        xxxl: {
          width: "w-[180px]",
          height: "h-[180px]",
          borderRadius: "rounded-3xl",
        },
      },
    },
  },
};

function AstroMatch() {
  const [card, setCard] = useState(1);
  const [title, setTitle] = useState("");
  const [open, setOpen] = React.useState(false);
  const [chat, setChat] = useState("md:hidden hidden");
  const [cookies, removeCookie] = useCookies([]);

  const [chatList, setChatList] = useState("md:col-span-11 col-span-1");
  const [chatclick, setChatClick] = useState(false);
  const [backclick, setBackClick] = useState(false);
  const [details, setDetails] = useState();

  const token = localStorage.getItem("token");
  const partnerHoroscope = localStorage.getItem("partnerHoroscope");
  const horoscope = localStorage.getItem("horoscope");

  const handleOpen = () => setOpen(!open);

  const handleChatClick = () => {
    setChatClick(!chatclick);
    checkClick();
  };

  const handleBackClick = () => {
    setBackClick(!backclick);
    checkClick();
  };

  const checkClick = () => {
    if (chatclick) {
      setChat("md:col-span-11 col-span-1");
      setChatList("md:hidden hidden");
    }
    if (backclick) {
      setChat("md:hidden hidden");
      setChatList("md:col-span-11 col-span-1");
    }
  };

  function changeTitle() {
    const astroCategory = [
      "Compatibility",
      "Professional Growth",
      "Physical Health",
      "Family Dynamics",
    ];

    setTitle(astroCategory[card - 1]);
  }

  const loadData = async () => {
    // console.log();

    try {
      const result = await axios.post(
        `https://match-made-back.onrender.com/user/astro-search`,
        { signs: [horoscope, partnerHoroscope] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        }
      );
      console.log(result);
      setDetails(result.data.message);
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
    changeTitle();
  }, [card]);

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-12 h-full mb-10 gap-2">
          <div className="col-span-1 md:col-span-1 md:h-[88vh] md:order-first order-3">
            <LeftBar activeAt={1} />
          </div>
          <div
            className={`md:h-[88vh] ${chat} lg:col-span-7 lg:grid text-bg_dark`}
          >
            <div
              className={`h-[83vh] lg:flex lg:flex-col md:h-[88vh] rounded-xl bg-card_light dark:bg-card_dark overflow-y-scroll mb-12 md:mb-0`}
            >
              <div className="lg:mt-8 mx-8 flex flex-col gap-6">
                {/* Astro Analysis Heading */}
                <Typography
                  className="flex mt-4 lg:mt-0 text-font_light dark:text-font_dark"
                  variant="h3"
                >
                  <div className="lg:hidden flex items-center justify-center">
                    <IconButton
                      variant="text"
                      className="rounded-full dark:text-white"
                      onClick={handleBackClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </IconButton>
                  </div>
                  Astro Analysis
                </Typography>
                {/* Image */}
                <div>
                  <figure className="relative h-[28rem] w-full">
                    <img
                      className="h-full w-full rounded-xl object-cover object-center"
                      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                      alt="nature image"
                    />
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                      <div>
                        <Typography variant="h5" color="blue-gray">
                          {details?.signs[0]} - {details?.signs[1]}
                        </Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                          {title} {/* ButtonType*/}
                        </Typography>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                {/* Astro Analysis Description */}
                <div>
                  <Typography
                    className="text-font_light dark:text-font_dark"
                    variant="paragraph"
                  >
                    {details?.description}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className={`relative lg:col-span-4 md:col-span-11 col-span-12 md:mr-2 lg:mr-0 bg-card_light lg:rounded-tl-2xl lg:rounded-bl-2xl dark:bg-card_dark dark:text-bg_light`}
          > */}
          <div
            className={` h-[88vh] rounded-xl md:h-[88vh] relative lg:block lg:h-[88vh] lg:col-span-4 ${chatList}  bg-card_light md:rounded-tl-xl md:rounded-bl-xl text-bg_dark dark:bg-card_dark dark:text-bg_light overflow-scroll`}
          >
            <div className="flex flex-col gap-8 items-center pt-24 ">
              {/* Overlapping Avatar  */}
              <div className="flex items-center -space-x-8">
                <ThemeProvider value={theme}>
                  <Avatar
                    variant="circular"
                    alt="user 1"
                    size="xxxl"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src={`/image/AstroSigns/${horoscope?.toLowerCase()}.png`}
                  />
                  <Avatar
                    variant="circular"
                    alt="user 2"
                    size="xxxl"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src={`/image/AstroSigns/${partnerHoroscope?.toLowerCase()}.png`}
                  />
                </ThemeProvider>
              </div>
              {/* Heading for Astro Cards */}
              <div>
                <Typography
                  className="text-font_light dark:text-font_dark"
                  variant="h3"
                >
                  A S T R O C A R D
                </Typography>
              </div>
              <div className="">
                <BuyPlanDialog>
                  <span className="m-2">Buy Premium to Unlock All</span>
                </BuyPlanDialog>
              </div>

              {/* Compatibility Cards */}
              <div
                className={`flex flex-wrap h-[22rem] items-center justify-center gap-6`}
              >
                <AstroCardButton
                  passedid={1}
                  active={card == 1}
                  clicked={setCard}
                  title="Compatibility"
                  disabled={false}
                  onClicked={handleChatClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mb-4 h-12 w-12 text-gray-900"
                  >
                    <path
                      d="M17.841 15.659L18.017 15.836L18.1945 15.659C19.0732 14.7803 20.4978 14.7803 21.3765 15.659C22.2552 16.5377 22.2552 17.9623 21.3765 18.841L18.0178 22.1997L14.659 18.841C13.7803 17.9623 13.7803 16.5377 14.659 15.659C15.5377 14.7803 16.9623 14.7803 17.841 15.659ZM12 14V22H4C4 17.6651 7.44784 14.1355 11.7508 14.0038L12 14ZM12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </AstroCardButton>
                {/* Professional Growth Cards */}
                <AstroCardButton
                  passedid={2}
                  active={card == 2}
                  clicked={handleOpen}
                  title="Professional Growth"
                  disabled={true}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mb-4 h-12 w-12 text-gray-900"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clip-rule="evenodd"
                    />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                  </svg>
                </AstroCardButton>
                {/* Physical Health Cards */}
                <AstroCardButton
                  passedid={3}
                  active={card == 3}
                  clicked={handleOpen}
                  title="Physical Health"
                  disabled={true}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mb-4 h-12 w-12 text-gray-900"
                  >
                    <path
                      d="M11 2C15.0675 2 18.426 5.03562 18.9337 8.96494L21.1842 12.5037C21.3324 12.7367 21.3025 13.0847 20.9593 13.2317L19 14.071V17C19 18.1046 18.1046 19 17 19H15.001L15 22H6L6.00025 18.3061C6.00033 17.1252 5.56351 16.0087 4.7555 15.0011C3.65707 13.6313 3 11.8924 3 10C3 5.58172 6.58172 2 11 2ZM10.4697 7.76256C9.78625 7.07915 8.67821 7.07915 7.9948 7.76256C7.31138 8.44598 7.31138 9.55402 7.9948 10.2374L11 13.2426L14.0052 10.2374C14.6886 9.55402 14.6886 8.44598 14.0052 7.76256C13.3218 7.07915 12.2137 7.07915 11.5303 7.76256L11 8.29289L10.4697 7.76256Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </AstroCardButton>
                {/* Family Dynamics Cards */}
                <AstroCardButton
                  passedid={4}
                  active={card == 4}
                  clicked={handleOpen}
                  title="Family Dynamics"
                  disabled={true}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mb-4 h-12 w-12 text-gray-900"
                  >
                    <path
                      d="M10 19.748V16.4C10 15.1174 10.9948 14.1076 12.4667 13.5321C11.5431 13.188 10.5435 13 9.5 13C7.61013 13 5.86432 13.6168 4.45286 14.66C5.33199 17.1544 7.41273 19.082 10 19.748ZM18.8794 16.0859C18.4862 15.5526 17.1708 15 15.5 15C13.4939 15 12 15.7967 12 16.4V20C14.9255 20 17.4843 18.4296 18.8794 16.0859ZM9.55 11.5C10.7926 11.5 11.8 10.4926 11.8 9.25C11.8 8.00736 10.7926 7 9.55 7C8.30736 7 7.3 8.00736 7.3 9.25C7.3 10.4926 8.30736 11.5 9.55 11.5ZM15.5 12.5C16.6046 12.5 17.5 11.6046 17.5 10.5C17.5 9.39543 16.6046 8.5 15.5 8.5C14.3954 8.5 13.5 9.39543 13.5 10.5C13.5 11.6046 14.3954 12.5 15.5 12.5ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </AstroCardButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AstroMatch;
