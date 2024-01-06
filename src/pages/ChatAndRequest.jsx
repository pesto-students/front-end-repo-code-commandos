import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import { useCookies } from "react-cookie";
import axios from "axios";
import Feed from "../components/Feed";
import Button from "../components/Button";
import MatchMeter from "../components/MatchMeter";
import { Typography, Chip, Checkbox } from "@material-tailwind/react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import {host} from "../utils/APIRoutes";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
} from "@material-tailwind/react";

import { ThemeProvider } from "@material-tailwind/react";
import FriendCard from "../components/FriendCard";
import FriendRecievedCard from "../components/FriendRecievedCard";
import FavouriteCard from "../components/FavouriteCard";
import Conversation from "../components/Conversation";
import { useNavigate } from "react-router-dom";

function ChatAndRequest() {
  const customTheme = {
    tabsHeader: {
      defaultProps: {
        className: "",
      },
      styles: {
        base: {
          bg: "bg-white dark:bg-bg_dark",
          bgOpacity: "bg-opacity-100",
        },
      },
    },
    tab: {
      defaultProps: {
        className: "",
        activeClassName: "",
        disabled: false,
      },
      styles: {
        base: {
          tab: {
            initial: {
              display: "flex",
              alignItems: "items-center",
              justifyContent: "justify-center",
              textAlign: "text-center",
              width: "w-full",
              height: "h-full",
              position: "relative",
              bg: "bg-transparent",
              py: "py-1",
              px: "px-2",
              color: "text-bg_dark dark:text-bg_light",
              fontSmoothing: "antialiased",
              fontFamily: "font-sans",
              fontSize: "text-xl",
              fontWeight: "font-normal",
              lineHeight: "leading-relaxed",
              userSelect: "select-none",
              cursor: "cursor-pointer",
            },
            disabled: {
              opacity: "opacity-50",
              cursor: "cursor-not-allowed",
              pointerEvents: "pointer-events-none",
              userSelect: "select-none",
            },
          },
          indicator: {
            position: "absolute",
            inset: "inset-0",
            zIndex: "z-10",
            height: "h-full",
            bg: "bg-button_light dark:bg-card_dark",
            borderRadius: "rounded-md",
            boxShadow: "shadow",
          },
        },
      },
    },
  };

  const navigate = useNavigate();
  const [chat, setChat] = useState("md:col-span-11 col-span-1");
  const [chatList, setChatList] = useState("md:hidden hidden");
  const [chatListData, setChatListData] = useState([]);
  const [chatclick, setChatClick] = useState(false);
  const [backclick, setBackClick] = useState(false);

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
      setChat("md:hidden hidden");
      setChatList("md:col-span-11 col-span-1");
    }
    if (backclick) {
      setChat("md:col-span-11 col-span-1");
      setChatList("md:hidden hidden");
    }
  };
  //   const data = null;
  const [cookies, removeCookie] = useCookies([]);
  const [sentRequests, setSentRequests] = useState(null);
  const [putRequests, setPutRequests] = useState(null);
  const [favourites, setFavourites] = useState(null);

  const getData = async () => {
    const result = await axios.post(
      `${host}/friends/sent-requests`,
      "",
      {
        headers: {
          Cookie: "token=" + cookies.token,
        },
        withCredentials: true,
      }
    );
    // console.log(result.data.message);
    setSentRequests(result.data.message);
    // return result.message;
  };

  const putData = async () => {
    const result = await axios.post(
      `${host}/friends/received-requests`,
      "",
      {
        headers: {
          Cookie: "token=" + cookies.token,
        },
        withCredentials: true,
      }
    );

    setPutRequests(result.data.message);
  };

  const getFavourites = async () => {
    const result = await axios.post(
      `${host}/user/favourites`,
      "",
      {
        headers: {
          Cookie: "token=" + cookies.token,
        },
        withCredentials: true,
      }
    );
    // const response = await fetch(`${host}/user/favourites`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ userId: "6572343b20e0ba4957caf1fa" }),
    // });

    // const result = await response.json();

    console.log(result.data);
    setFavourites(result.data.message);
    // return result.message;
  };

  const getChatList = async () => {
    const result = await axios.post(`${host}/chat/get-chat`, "", {
      headers: {
        Cookie: "token=" + cookies.token,
      },
      withCredentials: true,
    });
    // const response = await fetch(`${host}/user/favourites`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ userId: "6572343b20e0ba4957caf1fa" }),
    // });

    // const result = await response.json();

    console.log(result.data.message);
    setChatListData(result.data.message);
    // return result.message;
  };

  useEffect(() => {
    getData();
    putData();
    getFavourites();
    getChatList();
  }, []);

  async function onConsideredRequest(e) {
    console.log(e.target.name);
    const details = e.target.name.split("!~");
    const result = await axios.post(
      `${host}/friends/update-request`,
      { requestId: details[0], senderId: details[1], status: "Accepted" },
      {
        headers: {
          Cookie: "token=" + cookies.token,
        },
        withCredentials: true,
      }
    );
    putData();
    getData();
  }

  async function onDeclinedRequest(e) {
    console.log(e.target.name);
    const result = await axios.post(
      `${host}/friends/update-request`,
      { requestId: e.target.name, status: "Rejected" },
      {
        headers: {
          Cookie: "token=" + cookies.token,
        },
        withCredentials: true,
      }
    );
    putData();
    getData();
  }

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-12 h-full mb-10 gap-2">
          <div className="col-span-1 md:col-span-1 md:h-[88vh] md:order-first order-3">
            <LeftBar activeAt={2} />
          </div>
          {/* <div className="h-full col-span-11">
            <ProfileSettings/>
          </div> */}
          {/* dynamic hidden */}
          <div
            className={`md:h-[88vh] ${chat} lg:col-span-8 lg:grid text-bg_dark`}
          >
            <div className="h-[83vh] lg:flex lg:flex-col md:h-full rounded-xl bg-card_light dark:bg-card_dark">
              <div className="md:h-12 mx-6 lg:mt-8">
                <div className="relative h-[83vh] md:h-[88vh] pt-6 lg:pt-30 px-4 w-full">
                  <ThemeProvider value={customTheme}>
                    <Tabs value="Request Sent">
                      <TabsHeader>
                        <Tab key="Request Sent" value="Request Sent">
                          <div className="flex flex-col items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                              />
                            </svg>

                            <p className="text-sm mt-2 lg:text-xl">
                              Request Sent
                            </p>
                          </div>
                        </Tab>
                        <Tab key="Request Received" value="Request Received">
                          <div className="flex flex-col items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                              />
                            </svg>

                            <p className="text-sm mt-2 lg:text-xl">
                              Request Received
                            </p>
                          </div>
                        </Tab>
                        <Tab key="Favourites" value="Favourites">
                          <div className="flex flex-col items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>

                            <p className="text-sm mt-2 lg:text-xl">
                              Favourites
                            </p>
                          </div>
                        </Tab>
                      </TabsHeader>
                      <TabsBody>
                        <TabPanel key="Request Sent" value="Request Sent">
                          <div className="mt-4 overflow-scroll">
                            <ul className="flex flex-col gap-4 max-h-[70vh]">
                              {sentRequests?.map((result) => (
                                <FriendCard
                                  id={result._id}
                                  name={result.firstName}
                                  status={result.status}
                                  image=""
                                />
                              ))}
                              {/* <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <Chip
                                      variant="ghost"
                                      color="green"
                                      size="lg"
                                      value="Accepted"
                                    />
                                  </CardBody>
                                </Card>
                              </li>
                              <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <div className="flex gap-4">
                                      <Chip
                                        variant="ghost"
                                        size="lg"
                                        value="Pending"
                                      />
                                    </div>
                                  </CardBody>
                                </Card>
                              </li>
                              <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <div className="flex gap-4">
                                      <Chip
                                        variant="ghost"
                                        color="red"
                                        size="lg"
                                        value="Rejected"
                                      />
                                    </div>
                                  </CardBody>
                                </Card>
                              </li>
                              <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <Chip
                                      variant="ghost"
                                      color="green"
                                      size="lg"
                                      value="Accepted"
                                    />
                                  </CardBody>
                                </Card>
                              </li>
                              <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <div className="flex gap-4">
                                      <Chip
                                        variant="ghost"
                                        size="lg"
                                        value="Pending"
                                      />
                                    </div>
                                  </CardBody>
                                </Card>
                              </li>
                              <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <div className="flex gap-4">
                                      <Chip
                                        variant="ghost"
                                        color="red"
                                        size="lg"
                                        value="Rejected"
                                      />
                                    </div>
                                  </CardBody>
                                </Card>
                              </li>
                              <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <Chip
                                      variant="ghost"
                                      color="green"
                                      size="lg"
                                      value="Accepted"
                                    />
                                  </CardBody>
                                </Card>
                              </li>
                              <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <div className="flex gap-4">
                                      <Chip
                                        variant="ghost"
                                        size="lg"
                                        value="Pending"
                                      />
                                    </div>
                                  </CardBody>
                                </Card>
                              </li>
                              <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <div className="flex gap-4">
                                      <Chip
                                        variant="ghost"
                                        color="red"
                                        size="lg"
                                        value="Rejected"
                                      />
                                    </div>
                                  </CardBody>
                                </Card>
                              </li> */}
                            </ul>
                          </div>
                        </TabPanel>
                        {/* Request Received Panel */}
                        <TabPanel
                          key="Request Received"
                          value="Request Received"
                        >
                          <div className="mt-4 overflow-scroll">
                            <ul className="flex flex-col gap-4 max-h-[70vh]">
                              {putRequests?.map((result) => {
                                // console.log(result.firstName);
                                return (
                                  <FriendRecievedCard
                                    name={result.firstName}
                                    id={result._id}
                                  >
                                    <button
                                      name={
                                        result.requestId +
                                        "!~" +
                                        result.senderId
                                      }
                                      className="px-4 border-[1.75px] rounded-lg hover:border-green-500 bg-green-100 text-black/70 text-sm font-bold"
                                      onClick={onConsideredRequest}
                                    >
                                      CONSIDER
                                    </button>
                                    <button
                                      name={result.requestId}
                                      className="px-4 rounded-md hover:bg-red-200/50 text-black/70 text-sm font-bold"
                                      onClick={onDeclinedRequest}
                                    >
                                      DECLINE
                                    </button>
                                  </FriendRecievedCard>
                                );
                              })}

                              {/* <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Stephen Costa
                                    </Typography>
                                    <div className="flex gap-4">
                                      <Chip
                                        variant="ghost"
                                        color="green"
                                        size="lg"
                                        value="Accept"
                                      />
                                      <Chip
                                        variant="outlined"
                                        color="red"
                                        size="lg"
                                        value="Reject"
                                      />
                                    </div>
                                  </CardBody>
                                </Card>
                              </li> */}
                            </ul>
                          </div>
                        </TabPanel>
                        {/* Favourites Panel */}
                        <TabPanel key="Favourites" value="Favourites">
                          <div className="mt-4 overflow-scroll">
                            <ul className="flex flex-col gap-4 max-h-[70vh]">
                              {favourites?.map((result) => {
                                return (
                                  <FavouriteCard
                                    name={result.firstName}
                                    id={result._id}
                                  />
                                );
                              })}
                              {/* <li className="h-24">
                                <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
                                  <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 shrink-0 rounded-r-none"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                      alt="card-image"
                                      className="w-20 object-cover object-top h-20"
                                    />
                                  </CardHeader>
                                  <CardBody className="w-full overflow-hidden truncate flex justify-between items-center pl-1 pr-6">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className="mb-1"
                                    >
                                      Favourite Stephen
                                    </Typography>
                                    <div className="flex gap-4 justify-center items-center">
                                      <IconButton
                                        variant="text"
                                        className="rounded-full"
                                        onClick={handlefavourite}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke={`${favouriteButtonOutline}`}
                                          className={`w-6 h-6 ${favouriteButton}`}
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                          />
                                        </svg>
                                      </IconButton>

                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-8 h-8"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                      </svg>
                                    </div>
                                  </CardBody>
                                </Card>
                              </li> */}
                            </ul>
                          </div>
                        </TabPanel>
                      </TabsBody>
                    </Tabs>
                  </ThemeProvider>
                  <div className="absolute bottom-4 left-4 right-4 h-12 lg:hidden">
                    <Button
                      onClick={() => {
                        navigate("/chat");
                      }}
                    >
                      Chat List
                    </Button>
                  </div>
                </div>
              </div>
              {/* {data && <Feed>{data[currentIndex]}</Feed>} */}
            </div>
          </div>

          {/* Chat Option Section */}
          <div
            className={`h-[83vh] rounded-xl md:h-[88vh] relative lg:block lg:h-[88vh] lg:col-span-3 ${chatList}  bg-card_light md:rounded-tl-xl md:rounded-bl-xl text-bg_dark dark:bg-card_dark dark:text-bg_light`}
          >
            <Typography
              variant="h4"
              className="mt-8 ml-8 text-black dark:text-white"
            >
              Chats
            </Typography>

            {/* Chat List */}
            <div className="mt-8 overflow-scroll">
              <ul className="flex flex-col gap-4 mx-6 max-h-[74vh]">
                {/* <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2 shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <div>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-1"
                        >
                          Stephen Costa
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className=" font-extralight"
                        >
                          Like so many organizations these days
                        </Typography>
                      </div>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li>
                <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2  shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 w-3/12  shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-1"
                      >
                        Stephen Costa
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className=" font-extralight"
                      >
                        Like so many organizations these days
                      </Typography>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li>
                <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2 shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <div>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-1"
                        >
                          Stephen Costa
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className=" font-extralight"
                        >
                          Like so many organizations these days
                        </Typography>
                      </div>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li>
                <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2  shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 w-3/12  shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-1"
                      >
                        Stephen Costa
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className=" font-extralight"
                      >
                        Like so many organizations these days
                      </Typography>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li>
                <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2 shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <div>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-1"
                        >
                          Stephen Costa
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className=" font-extralight"
                        >
                          Like so many organizations these days
                        </Typography>
                      </div>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li>
                <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2  shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 w-3/12  shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-1"
                      >
                        Stephen Costa
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className=" font-extralight"
                      >
                        Like so many organizations these days
                      </Typography>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li>
                <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2 shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <div>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-1"
                        >
                          Stephen Costa
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className=" font-extralight"
                        >
                          Like so many organizations these days
                        </Typography>
                      </div>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li>
                <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2  shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 w-3/12  shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-1"
                      >
                        Stephen Costa
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className=" font-extralight"
                      >
                        Like so many organizations these days
                      </Typography>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li> */}
                {chatListData?.map((result) => {
                  return (
                    <Conversation
                    firstName={result.firstName}
                    lastName={result.lastName}
                      onClick={() => {
                        localStorage.setItem('convo',result.chatId)
                        localStorage.setItem('convo-you',result.userId)
                        navigate("/chat");
                        handleChatClick;
                      }}
                    />
                  );
                })}
              </ul>

              {/* Request List */}
              {/* <div className="block absolute bottom-4 left-4 right-4 h-12">
              <Button
                onClick={() => {
                  navigate("/chat-request");
                }}
              >
                Request List
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatAndRequest;
