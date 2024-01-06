import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftCard from "../components/LeftCard";
import InputField from "../components/InputField";
import Button from "../components/Button";
import RightCard from "../components/RightCard";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {host} from "../utils/APIRoutes";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
  ThemeProvider,
  Typography,
  Alert,
} from "@material-tailwind/react";

function Home() {
  function refreshPage() {
    window.location.reload(false);
  }

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
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [loginFormData, setLoginFormData] = useState({
    phone: null,
    password: null,
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${host}/user/login`,
        { ...loginFormData },
        { crossDomain: true, withCredentials: true }
      )
      .then((response) => {
        if (
          response.data.message ===
            "Access Denied. Incorrect password or phone number" ||
          response.data.message === "Incorrect password or phone number"
        ) {
          setLoginOpen(true);
        } else {
          navigate("/matchfeed");
          refreshPage();
        }
      })
      .catch((error) => console.log(error));
  };

  const [formData, setFormData] = useState({
    gender: null,
    phone: null,
    password: null,
  });

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${host}/user/create`,
        { ...formData },
        { crossDomain: true, withCredentials: true }
      )
      .then((response) => {
        console.log(response.data.message);
        console.log(typeof response.data.message);
        if (response.data.message === "User already exists") {
          setRegisterOpen(true);
        } else {
          navigate("/register");
          refreshPage();
        }
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   navigate("/")
  // },[]);

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="grid grid-cols-12 mb-10 gap-2">
          <section className="h-[88vh] lg:col-span-9 lg:grid hidden min-h-full bg-card_light bg-landing_light  dark:bg-card_dark dark:bg-landing_dark bg-contain bg-no-repeat bg-center rounded-tr-2xl rounded-br-2xl"></section>

          {/* Right side */}

          <section
            className={`h-[88vh] lg:col-span-3 col-span-12 bg-card_light lg:rounded-tl-2xl lg:rounded-bl-2xl dark:bg-card_dark dark:text-bg_light`}
          >
            <div className="mt-4 mx-4">
              <ThemeProvider value={customTheme}>
                <Tabs value="Register">
                  <TabsHeader>
                    <Tab key="Register" value="Register">
                      <p>Register</p>
                    </Tab>
                    <Tab key="Login" value="Login">
                      <p>Login</p>
                    </Tab>
                  </TabsHeader>
                  <TabsBody>
                    {/* Register Body */}
                    <TabPanel key="Register" value="Register">
                      <form onSubmit={handleRegisterSubmit}>
                        <div className="mt-2 my-2 flex flex-col gap-4">
                          {/* Bride & Groom radio choice */}
                          <div>
                            <div className="flex  dark:text-font_dark">
                              <label className="flex font-normal text-lg">
                                You are looking for
                              </label>
                            </div>
                            <div className="flex pt-3 justify-start dark:text-font_dark dark:accent-slate-50 ">
                              <div>
                                <input
                                  type="radio"
                                  id="bride"
                                  name="gender"
                                  value="male"
                                  className="overflow-hidden absolute w-0 peer"
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      gender: e.target.value,
                                    })
                                  }
                                />
                                <label
                                  htmlFor="bride"
                                  className="flex flex-col rounded-xl border-solid border-2  w-32 h-32 border-bg_dark font-light items-center justify-center hover:bg-button_light peer-checked:bg-button_light peer-checked:z-10 peer-checked:ring-4 peer-checked:ring-button_light peer-checked:border-2 peer-checked:border-bg_light dark:border-bg_light dark:hover:bg-button_dark  dark:peer-checked:bg-button_dark dark:peer-checked:z-10 dark:peer-checked:ring-4 dark:peer-checked:ring-button_dark dark:peer-checked:border-2 dark:peer-checked:border-bg_dark // peer-focus:bg-button_light peer-focus:z-10 peer-focus:ring-4 peer-focus:ring-button_light peer-focus:border-2 peer-focus:border-bg_light  dark:peer-focus:bg-button_dark dark:peer-focus:z-10 dark:peer-focus:ring-4 dark:peer-focus:ring-button_dark dark:peer-focus:border-2 dark:peer-focus:border-bg_dark"
                                >
                                  <svg
                                    className="w-16 fill-bg_dark dark:fill-bg_light"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M39.1604 2.50594C36.2854 3.93894 32.7284 6.74894 31.2504 8.75594C29.7724 10.7619 24.9014 16.2559 20.4254 20.9659C5.00937 37.1849 0.0223725 53.3449 0.000372489 87.1529C-0.00762751 99.2389 0.0963725 99.9029 1.99237 99.9029C3.79437 99.9029 3.99337 99.2329 4.00137 93.1529C4.01837 80.0479 5.98537 59.2509 7.92537 51.6669C9.00537 47.4439 11.1174 41.4789 12.6204 38.4099C15.5634 32.4009 25.8724 20.4119 25.9474 22.9119C25.9724 23.7429 25.1034 24.9769 24.0164 25.6559C22.9294 26.3349 20.6834 29.2549 19.0254 32.1469C15.4024 38.4649 15.0924 44.2009 17.8404 54.1109C18.9154 57.9889 19.3404 61.3259 18.8554 62.0899C16.9334 65.1219 17.9414 70.0529 21.0834 72.9879C22.7834 74.5759 25.2594 78.0529 26.5864 80.7149C31.1154 89.8039 43.4764 99.9029 50.0734 99.9029C56.2694 99.9029 69.1144 89.3119 73.4364 80.6389C74.7424 78.0189 77.2014 74.5759 78.9014 72.9879C82.0434 70.0529 83.0514 65.1219 81.1294 62.0899C80.6444 61.3259 81.0694 57.9889 82.1444 54.1109C84.8814 44.2419 84.5794 38.4589 81.0034 32.2239C79.3694 29.3749 77.0744 26.3729 75.9034 25.5529C74.7314 24.7319 73.9544 23.5179 74.1754 22.8539C74.8044 20.9669 83.8484 31.6749 87.1524 38.2199C88.7894 41.4629 91.0054 47.5419 92.0764 51.7299C94.0024 59.2609 95.9664 80.0869 95.9834 93.1529C95.9914 99.2329 96.1904 99.9029 97.9924 99.9029C99.8884 99.9029 99.9924 99.2389 99.9844 87.1529C99.9624 53.3449 94.9754 37.1849 79.5594 20.9659C75.0834 16.2559 70.2124 10.7619 68.7344 8.75594C62.4764 0.260936 49.2684 -2.53006 39.1604 2.50594ZM54.0554 9.96594C55.1894 11.0999 56.6514 11.8359 57.3054 11.6009C59.0384 10.9769 61.9924 12.7429 61.9924 14.4029C61.9924 15.1889 62.9314 16.3349 64.0784 16.9489C67.4394 18.7479 65.7784 18.9439 60.5364 17.3659C54.2994 15.4889 45.6394 15.4999 39.4014 17.3919C33.2584 19.2559 33.3114 19.2589 35.2714 17.1529C36.1664 16.1899 37.8104 14.4009 38.9234 13.1759C40.0364 11.9509 41.5974 11.1979 42.3924 11.5029C43.1874 11.8079 44.7724 11.1229 45.9154 9.97994C48.5534 7.34194 51.4264 7.33694 54.0554 9.96594ZM64.4254 46.4389C72.7174 53.0879 73.9924 54.6429 73.9924 58.1039C73.9924 60.2209 74.7304 62.0899 75.9924 63.1709C77.0924 64.1129 77.9924 65.5309 77.9924 66.3219C77.9924 67.9379 75.3494 70.9029 73.9084 70.9029C73.3904 70.9029 71.8784 73.3639 70.5484 76.3729C67.5484 83.1559 60.2204 91.1299 54.3944 93.9499L49.9924 96.0809L45.5264 93.9189C39.5684 91.0349 31.4764 82.0329 29.2784 75.8449C28.3124 73.1269 26.9854 70.9029 26.3294 70.9029C24.6794 70.9029 21.9924 68.0649 21.9924 66.3219C21.9924 65.5309 22.8924 64.1129 23.9924 63.1709C25.3334 62.0229 25.9924 60.2209 25.9924 57.7039C25.9924 53.0019 27.7974 51.7299 38.2204 49.0819C47.7814 46.6529 54.3834 42.9019 56.1544 38.8939L57.4924 35.8659L59.1104 39.6709C60.0004 41.7639 62.3924 44.8099 64.4254 46.4389Z"
                                    />
                                  </svg>
                                  Bride
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  id="groom"
                                  name="gender"
                                  value="female"
                                  className="overflow-hidden absolute w-0 peer"
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      gender: e.target.value,
                                    })
                                  }
                                />
                                <label
                                  htmlFor="groom"
                                  className="ml-4 flex flex-col rounded-xl border-solid border-2 w-32 h-32 border-bg_dark font-light items-center justify-center hover:bg-button_light peer-checked:bg-button_light peer-checked:z-10 peer-checked:ring-4 peer-checked:ring-button_light peer-checked:border-2 peer-checked:border-bg_light dark:border-bg_light dark:hover:bg-button_dark  dark:peer-checked:bg-button_dark dark:peer-checked:z-10 dark:peer-checked:ring-4 dark:peer-checked:ring-button_dark dark:peer-checked:border-2 dark:peer-checked:border-bg_dark // peer-focus:bg-button_light peer-focus:z-10 peer-focus:ring-4 peer-focus:ring-button_light peer-focus:border-2 peer-focus:border-bg_light  dark:peer-focus:bg-button_dark dark:peer-focus:z-10 dark:peer-focus:ring-4 dark:peer-focus:ring-button_dark dark:peer-focus:border-2 dark:peer-focus:border-bg_dark"
                                >
                                  <svg
                                    className="w-16 fill-bg_dark dark:fill-bg_light"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M37.487 0.969697C29.315 2.8937 22.318 8.1847 18.433 15.3777C16.481 18.9917 16.26 21.0107 16.137 36.2897L16 53.2017L18.715 55.7897C20.209 57.2127 22.713 60.6207 24.28 63.3627C28.191 70.2057 35.123 77.3867 40.182 79.8357C45.755 82.5337 53.783 82.5337 59.356 79.8357C64.415 77.3867 71.347 70.2057 75.258 63.3627C76.825 60.6207 79.297 57.2427 80.75 55.8557C83.386 53.3407 83.394 53.2867 83.576 36.5607C83.78 17.8247 83.076 14.6567 77.892 10.9647C76.185 9.7497 73.163 8.4917 71.177 8.1687C69.19 7.8467 66.482 6.4997 65.158 5.1757C63.833 3.8507 61.194 2.1177 59.292 1.3227C55.472 -0.273303 43.582 -0.466303 37.487 0.969697ZM65.769 21.8747C65.769 22.9737 67.456 25.7397 69.518 28.0217C73.086 31.9707 73.285 32.5567 73.628 40.1207C73.984 47.9587 74.024 48.0617 76.458 47.5967C80.049 46.9107 80.717 49.6907 77.585 52.2877C76.199 53.4367 73.776 56.7867 72.201 59.7317C61.968 78.8667 47.445 83.1137 35.269 70.5317C32.519 67.6897 28.965 62.8927 27.371 59.8707C25.777 56.8497 23.339 53.4367 21.953 52.2877C18.767 49.6457 19.492 46.9107 23.19 47.6177C25.736 48.1047 25.769 48.0317 25.769 41.9617C25.769 38.5807 26.409 34.2827 27.19 32.4117C29.324 27.3067 33.208 25.8297 47.06 24.8577C56.761 24.1767 59.616 23.6187 61.691 21.9997C64.985 19.4297 65.769 19.4057 65.769 21.8747ZM30.239 82.1397C29.927 83.3837 29.806 87.7657 29.97 91.8787C30.314 100.491 31.297 101.297 37.854 98.3397C41.062 96.8927 41.536 96.3107 40.732 94.8087C39.506 92.5177 39.513 86.8307 40.745 84.8827C41.467 83.7397 40.935 82.9847 38.479 81.6747C33.888 79.2247 30.929 79.3917 30.239 82.1397ZM61.059 81.6747C58.603 82.9847 58.071 83.7397 58.793 84.8827C60.025 86.8307 60.032 92.5177 58.806 94.8087C58.002 96.3107 58.476 96.8927 61.684 98.3397C68.241 101.297 69.224 100.491 69.568 91.8787C69.732 87.7657 69.611 83.3837 69.299 82.1397C68.609 79.3917 65.65 79.2247 61.059 81.6747ZM43.769 89.8777V93.8777H49.769H55.769V89.8777V85.8777H49.769H43.769V89.8777Z"
                                    />
                                  </svg>
                                  Groom
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Phone Number */}
                          <div className="min-w-full">
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-1 font-medium dark:text-white"
                            >
                              Your phone number
                            </Typography>
                            <input
                              className="flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
                              name="phone"
                              id="phone"
                              type="tel"
                              placeholder="7100 546321"
                              required={true}
                              min={10}
                              max={10}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                            />
                          </div>
                          {/* New Password */}
                          <div className="min-w-full">
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-1 font-medium dark:text-white"
                            >
                              Your password
                            </Typography>
                            <input
                              className="flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
                              name="password"
                              id="newPassword"
                              type="password"
                              placeholder="••••••••"
                              required={true}
                              min={8}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  password: e.target.value,
                                })
                              }
                            />
                            <Typography
                              variant="small"
                              className="ml-2 mt-1 text-xs text-gray-700 dark:text-white/50"
                            >
                              (Minimum 8 alpha-numeric characters)
                            </Typography>
                          </div>
                          <Button type="submit">Let's start</Button>
                        </div>
                      </form>
                      <Alert
                        open={registerOpen}
                        onClose={() => setRegisterOpen(false)}
                        color="white"
                        animate={{
                          mount: { y: 0 },
                          unmount: { y: 100 },
                        }}
                      >
                        User already exists! Try Login.
                      </Alert>
                    </TabPanel>

                    {/* Login Body */}
                    <TabPanel key="Login" value="Login">
                      <form action="" onSubmit={handleLoginSubmit}>
                        <div className="mt-8 my-2 flex flex-col md:items-center gap-6 ">
                          <div className="min-w-full">
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-2 font-medium dark:text-white"
                            >
                              Phone number
                            </Typography>
                            <input
                              className="flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
                              name="phone-number"
                              id="phone-number"
                              type="tel"
                              placeholder="8100 456789"
                              required={true}
                              onChange={(e) =>
                                setLoginFormData({
                                  ...loginFormData,
                                  phone: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="min-w-full">
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-2 font-medium dark:text-white"
                            >
                              Password
                            </Typography>
                            <input
                              className="flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
                              name="password"
                              id="password"
                              type="password"
                              placeholder="••••••••"
                              min={8}
                              required={true}
                              onChange={(e) =>
                                setLoginFormData({
                                  ...loginFormData,
                                  password: e.target.value,
                                })
                              }
                            />
                          </div>
                          <a href="#" className="font-body text-sm">
                            Forgot password?
                          </a>
                          <Button type="submit">Login</Button>
                        </div>
                      </form>
                      <Alert
                        open={loginOpen}
                        onClose={() => setLoginOpen(false)}
                        color="white"
                        animate={{
                          mount: { y: 0 },
                          unmount: { y: 100 },
                        }}
                      >
                        Incorrect password or phone number
                      </Alert>
                    </TabPanel>
                  </TabsBody>
                </Tabs>
              </ThemeProvider>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
