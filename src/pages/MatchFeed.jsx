import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import Feed from "../components/Feed";
import MatchMeter from "../components/MatchMeter";
import ProfileSettings from "../components/ProfileSettings";
import IconButton from "../components/IconButton";
import PremiumDialog from "../components/BuyPlanDialog";
import BuyPlanDialog from "../components/BuyPlanDialog";
import LoadingSkeleton from "../components/LoadingSkeleton";
import axios from "axios";
import { host } from "../utils/APIRoutes";

function MatchFeed() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       navigate("/");
  //     }
  //   };
  //   verifyCookie();
  // }, []);

  const token = localStorage.getItem("token");
  const [mvalue, setMvalue] = useState("col-span-2");
  const [fvalue, setFvalue] = useState("md:col-span-9");
  const [click, setClick] = useState(false);
  const [data, setData] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // const [prevIconDisabled, setprevIconDisabled] = useState(true);
  // const [nextIconDisabled, setNextIconDisabled] = useState(false);

  function handleNext() {
    if (data && currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  // function handleNext() {
  //   console.log(data.length);
  //   if (feedIndex < data.length - 1) {
  //     console.log(data);
  //     feedIndex += 1;
  //     if (feedIndex == data.length - 1) {
  //       setNextIconDisabled(true);
  //     }
  //     setprevIconDisabled(false);
  //   }
  // }

  // function handlePrev() {
  //   if (feedIndex > 0) {
  //     console.log(feedIndex);
  //     feedIndex -= 1;
  //     console.log(feedIndex);
  //     if (feedIndex == 0) {
  //       console.log(feedIndex);
  //       setprevIconDisabled(true);
  //       setNextIconDisabled(false);
  //     }
  //     setNextIconDisabled(false);
  //   }
  // }

  // const fetchData = async () => {
  //   await fetch("http://192.168.1.3:3000/api/account/search/partner", {
  //     method: "POST",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log(json.data.documents);
  //       setData(json.data.documents);
  //       // localStorage.setItem("data", json.data.documents);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   // const items = JSON.parse(localStorage.getItem("data"));
  //   // if (data) {
  //   //   setData(data);
  //   // } else {
  //     fetchData();
  //   // }
  // }, []);

  const fetchData = async () => {
    try {
      const result = await axios.post(
        `https://match-made-back.onrender.com/user/match-feed`,
        "",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
          crossDomain: true,
          withCredentials: true,
        }
      );
      // const response = await fetch(`${host}/user/match-feed`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ id: "65913b3acc825525476246e5" }),
      // });
      // const json = await response.json();
      setTimeout(() => {
        setData(result.data.message);
      }, "300");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [token]);

  const handleClick = (click) => {
    setClick(click);
    if (click) {
      setFvalue("md:col-start-2 md:col-end-9");
      setMvalue("md:col-span-4");
    } else {
      setFvalue("md:col-start-2 md:col-end-11");
      setMvalue("md:col-span-2");
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-12 h-full mb-10 gap-2">
          <div className="col-span-1 md:col-span-1 md:h-[88vh] md:order-first order-3">
            <LeftBar activeAt={1} />
          </div>
          {/* <div className="h-full col-span-11">
            <ProfileSettings/>
          </div> */}
          <div className={` col-span-1 md:h-[88vh] ${fvalue}`}>
            <div className="md:flex md:flex-col md:h-full rounded-xl bg-card_light dark:bg-card_dark ">
              <div className="md:h-12 flex justify-between items-center mx-6 my-4">
                <span>
                  <BuyPlanDialog>
                    <svg
                      className="w-4 h-4 mx-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 18V21H19V18H17V16H23V18H21ZM5 18V21H3V18H1V16H7V18H5ZM11 6V3H13V6H15V8H9V6H11ZM11 10H13V21H11V10ZM3 14V3H5V14H3ZM19 14V3H21V14H19Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="mr-2">Personal Preference</span>
                  </BuyPlanDialog>
                </span>
                {data && (
                  <div className=" text-bg_dark dark:text-bg_light mt-4">
                    <button disabled={currentIndex === 0} onClick={handlePrev}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <button
                      disabled={currentIndex === data.length - 1}
                      onClick={handleNext}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
              {data ? <Feed>{data[currentIndex]}</Feed> : <LoadingSkeleton />}
            </div>
          </div>
          <div
            className={`relative col-span-1 ${mvalue} md:h-[88vh] md:order-3`}
            onClick={() => handleClick(!click)}
          >
            <div className="pb-24 md:pb-0 rounded-xl md:h-full md:grid md:grid-cols-1 md:w-full md:rounded-bl-xl md:rounded-tl-xl bg-card_light dark:bg-card_dark">
              {data && (
                <MatchMeter clicked={click}>{data[currentIndex]}</MatchMeter>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MatchFeed;
