import React from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import Button from "../components/Button";
import BuyPlanDialog from "../components/BuyPlanDialog";
import { useCookies } from "react-cookie";
import {host} from "../utils/APIRoutes";

import {
  Typography,
  Chip,
  Checkbox,
  Textarea,
  IconButton,
} from "@material-tailwind/react";

import Message from "../components/Message";
import MessageDateChip from "../components/MessageDateChip";
import axios from "axios";
import Conversation from "../components/Conversation";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [chatPartner, setChatPartner] = useState({});
  const [senderId, setSenderId] = useState();
  const [conversationId, setConversationId] = useState();
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState("");

  const [chat, setChat] = useState("md:hidden hidden");

  const [chatListData, setChatListData] = useState([]);
  const [chatList, setChatList] = useState("md:col-span-11 col-span-1");
  const [chatclick, setChatClick] = useState(false);
  const [backclick, setBackClick] = useState(false);

  // MAKE STATICS VALUES - DYNAMIC
  const _senderId = "6571f16ba15ead32cc0a5907";
  const _receiverId = "6572343b20e0ba4957caf1fa";
  const socket = io(`https://match-made-back.onrender.com`);

  const handleChatClick = (e) => {
    
    setChatClick(!chatclick);
    // localStorage.setItem('convo',e.chatId)
    // setChatPartner({firstName:e.firstName, lastName:e.lastName})
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

  const getMessages = async () => {
    const result = await axios.post(
      `https://match-made-back.onrender.com/message/get-messages`,
      { chatId: conversationId },
      {
        headers: {
          Cookie: "token=" + cookies.token,
        },
        withCredentials: true,
      }
    );
    // console.log(result.data.message);
    setConversation(result.data.message);
  };

  useEffect(() => {
    const getConversations = async () => {
      try {
        const result = await axios.post(
          `https://match-made-back.onrender.com/chat/get-chat`,
          "",
          {
            headers: {
              Cookie: "token=" + cookies.token,
            },
            withCredentials: true,
          }
        );

        setChatListData(result.data.message);
        setConversationId(localStorage.getItem("convo"));
        setSenderId(localStorage.getItem("convo-you"));
        getMessages();
        console.log(senderId);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [conversationId]);

  useEffect(() => {
    socket.on("connection", (res) => {
      console.log("Connection ID" + res.id);
    });

    socket.emit("get-id", { chatId: conversationId });

    // Convesation ID
    socket.on("connection-id", (converse) => {
      console.log("User conversation ID: " + converse.id);
      console.log("Result: " + converse.result);
      // setConversation(converse.result);
      // setConversationId("6572e52ade9c5c60389b7147");
    });

    socket.on("message", (newMessage) => {
      console.log("User Message: " + message);
      setConversation((preMessages) => [...preMessages, newMessage]);
    });

    socket.on("reconnect_error", (error) => {
      socket.disconnect();
    });

    socket.on("connect_error", (error) => {
      console.log(error);
      socket.disconnect();
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = () => {
    // EMIT MESSAGE TO BACKEND
    socket.emit("message", {
      chatId: conversationId,
      senderid: senderId,
      texts: message,
    });

    setMessage((prevMessage) => [
      ...prevMessage,
      {
        chatId: conversationId,
        senderId: senderId,
        text: message,
      },
    ]);

    setConversation((prevConversation) => [
      ...prevConversation,
      {
        chatId: conversationId,
        senderId: senderId,
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-12 h-full mb-10 gap-2">
          <div className="col-span-1 md:col-span-1 md:h-[88vh] md:order-first order-3">
            <LeftBar activeAt={2} />
          </div>

          {/* Chat Section &  dynamic hidden */}
          {/* <div
          className={`md:h-[88vh] md:col-span-11 lg:col-span-8 lg:grid text-bg_dark`}
        ></div> */}
          <div
            className={`md:h-[88vh] ${chat} lg:col-span-8 lg:grid text-bg_dark`}
          >
            <div
              className={`h-[83vh] lg:flex lg:flex-col md:h-[88vh] rounded-xl bg-card_light dark:bg-card_dark`}
            >
              {/* Chat Header */}
              <div className="w-full bg-button_light rounded-tr-2xl rounded-tl-2xl">
                <div className="w-full rounded-tl-2xl rounded-tr-2xl bg-button_light dark:bg-button_dark dark:text-white flex">
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

                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt="card-image"
                    className="w-20 h-20 object-cover object-top rounded-full p-2"
                  />
                  <div className="w-full flex justify-between mx-3">
                    <div className="flex flex-col justify-center">
                      <span className="text-xl font-semibold">
                        {chatPartner.firstName + " " + chatPartner.lastName}
                      </span>
                      <span className="text-xs text-black/50 dark:text-white/50">
                        🟢online
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4 pr-4">
                      <BuyPlanDialog noBorder={true}>
                        <IconButton
                          variant="text"
                          className="rounded-full dark:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </IconButton>
                      </BuyPlanDialog>

                      <BuyPlanDialog noBorder={true}>
                        <IconButton
                          variant="text"
                          className="rounded-full dark:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.25}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                        </IconButton>
                      </BuyPlanDialog>
                      {/* <IconButton
                        variant="text"
                        className="rounded-full dark:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth={.25}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </IconButton> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-auto p-8 h-[64vh] md:h-[69vh] lg:h-[88vh] overflow-y-scroll">
                <div className="flex flex-col gap-3">
                  {/* Date Tags */}
                  <div className="flex justify-center">
                    <Chip
                      id="date"
                      value="25 Nov"
                      className="rounded-full w-min bg-button_light/40 text-black/70 dark:bg-button_dark/50 dark:text-white/70"
                    />
                  </div>
                  {/* Our Side Message */}
                  <Message our={false}>
                    Hello there!Hello there! Hello there! Hello there! Hello
                    there! Hello there! Hello there! ♦
                  </Message>
                  {conversation?.map((content) => {
                    return (
                      <Message
                        id={content.texts}
                        our={content.senderId == senderId}
                      >
                        {content.text}
                      </Message>
                    );
                  })}
                </div>
              </div>

              {/* Chat Footer | INPUT Mesage*/}
              <div className="rounded-b-xl p-2">
                <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 dark:border-bg_light/70 dark:bg-bg_light/10  p-2">
                  <Textarea
                    rows={1}
                    resize={false}
                    className="min-h-full !border-0 focus:border-transparent dark:text-white text-xl"
                    containerProps={{
                      className: "grid h-full",
                    }}
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div>
                    <IconButton
                      variant="text"
                      className="rounded-full  dark:text-white"
                      onClick={sendMessage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-7 w-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Option Section */}
          <div
            className={` h-[83vh] rounded-xl md:h-[88vh] relative lg:block lg:h-[88vh] lg:col-span-3 ${chatList}  bg-card_light md:rounded-tl-xl md:rounded-bl-xl text-bg_dark dark:bg-card_dark dark:text-bg_light`}
          >
            <Typography
              variant="h4"
              className="mt-8 ml-8 text-black dark:text-white"
            >
              Chats
            </Typography>

            {/* Chat List */}
            <div className="mt-8">
              <ul className="flex flex-col mx-6 gap-4">
                {chatListData?.map((c) => (
                  <Conversation
                    firstName={c.firstName}
                    lastName={c.lastName}
                    onClick={handleChatClick}
                  />
                ))}

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
                </li> */}
              </ul>
            </div>

            {/* Request List */}
            <div className="absolute bottom-4 left-4 right-4 h-12">
              <Button
                onClick={() => {
                  navigate("/chat-request");
                }}
              >
                Request List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
