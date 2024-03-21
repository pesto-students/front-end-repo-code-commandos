import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "universal-cookie";
// import { useCookies } from "react-cookie";

function LeftBarMobile({ activeAt }) {
  function refreshPage() {
    window.location.reload(false);
  }
  const navigate = useNavigate();
  const cookies = new Cookies();
  // const [cookies, removeCookie] = useCookies([]);
  const [selectedOption, setSelectedOption] = useState(activeAt);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    // cookies.remove("token");
    // refreshPage();
    navigate("/login");
  };
  

  return (
    <>
      <div className="fixed mx-auto bottom-0 left-0 right-0 p-2 z-10 h-[5rem]">
        
          <div className="flex flex-wrap h-full w-full items-center justify-center gap-8 overflow-scroll rounded-xl bg-card_light py-4 dark:bg-card_dark">
            <button
              onClick={() => {
                setSelectedOption(1);
              }}
            >
              <Link to="/matchfeed">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  className={`rounded-md ${selectedOption == 1 ? "bg-button_light dark:bg-button_dark" : ""}  dark:focus:bg-button_dark dark:active:bg-button_dark p-1 fill-bg_dark dark:fill-bg_light`}
                >
                  <path d="M10 8H14V6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H16V14H17.5C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5V16H10V17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14H8V10H6.5C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5V8ZM8 8V6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8H8ZM8 16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5V16ZM16 8H17.5C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5V8ZM16 16V17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16H16ZM10 10V14H14V10H10Z"></path>
                </svg>
              </Link>
            </button>
            <button
              onClick={() => {
                setSelectedOption(2);
              }}
            >
              <Link to="/chat-request">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`rounded-md ${selectedOption == 2 ? "bg-button_light dark:bg-button_dark" : ""}  dark:focus:bg-button_dark dark:active:bg-button_dark p-1 fill-bg_dark dark:fill-bg_light`}
                >
                  <path d="M11.3636 31.2501L2.08325 38.5418V6.25008C2.08325 5.0995 3.016 4.16675 4.16659 4.16675H35.4166C36.5672 4.16675 37.4999 5.0995 37.4999 6.25008V31.2501H11.3636ZM9.92246 27.0834H33.3333V8.33342H6.24992V29.969L9.92246 27.0834ZM16.6666 35.4167H37.9941L41.6666 38.3024V16.6667H43.7499C44.9005 16.6667 45.8333 17.5995 45.8333 18.7501V46.8751L36.553 39.5834H18.7499C17.5993 39.5834 16.6666 38.6507 16.6666 37.5001V35.4167Z" />
                </svg>
              </Link>
            </button>
            <button
              onClick={() => {
                setSelectedOption(3);
              }}
            >
              <Link to="/profile-settings">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`rounded-md ${selectedOption == 3 ? "bg-button_light dark:bg-button_dark" : ""}  dark:focus:bg-button_dark dark:active:bg-button_dark p-1 fill-bg_dark dark:fill-bg_light`}
                >
                  <path d="M24.9999 29.1666V33.3333C18.0964 33.3333 12.4999 38.9297 12.4999 45.8333H8.33325C8.33325 36.6285 15.7952 29.1666 24.9999 29.1666ZM24.9999 27.0833C18.0937 27.0833 12.4999 21.4895 12.4999 14.5833C12.4999 7.677 18.0937 2.08325 24.9999 2.08325C31.9062 2.08325 37.4999 7.677 37.4999 14.5833C37.4999 21.4895 31.9062 27.0833 24.9999 27.0833ZM24.9999 22.9166C29.6041 22.9166 33.3333 19.1874 33.3333 14.5833C33.3333 9.97909 29.6041 6.24992 24.9999 6.24992C20.3958 6.24992 16.6666 9.97909 16.6666 14.5833C16.6666 19.1874 20.3958 22.9166 24.9999 22.9166ZM30.4053 39.1905C30.2764 38.648 30.2083 38.082 30.2083 37.4999C30.2083 36.918 30.2764 36.352 30.4051 35.8095L28.3393 34.6168L30.4226 31.0083L32.4899 32.2018C33.3089 31.4272 34.3074 30.8403 35.4166 30.5101V28.1249H39.5833V30.5101C40.6924 30.8403 41.6908 31.4272 42.5097 32.2018L44.5772 31.008L46.6608 34.6166L44.5947 35.8093C44.7235 36.352 44.7916 36.918 44.7916 37.4999C44.7916 38.0818 44.7235 38.6478 44.5947 39.1903L46.6608 40.383L44.5774 43.9916L42.5099 42.7978C41.691 43.5726 40.6926 44.1595 39.5835 44.4895V46.8749H35.4168V44.4897C34.3076 44.1597 33.3091 43.5728 32.4901 42.798L30.4228 43.9918L28.3393 40.3833L30.4053 39.1905ZM37.4999 40.6249C39.2257 40.6249 40.6249 39.2258 40.6249 37.4999C40.6249 35.7741 39.2257 34.3749 37.4999 34.3749C35.7741 34.3749 34.3749 35.7741 34.3749 37.4999C34.3749 39.2258 35.7741 40.6249 37.4999 40.6249Z" />
                </svg>
              </Link>
            </button>
            {/* TODO: Logout function */}
            <button 
            onClick={handleLogout}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`rounded-md ${selectedOption == 4 ? "bg-button_light dark:bg-button_dark" : ""}  dark:focus:bg-button_dark dark:active:bg-button_dark p-1 fill-bg_dark dark:fill-bg_light`}
              >
                <path d="M10.4167 22.9167H27.0833V27.0834H10.4167V33.3334L0 25.0001L10.4167 16.6667V22.9167ZM8.33181 37.5001H13.9757C16.9138 40.0932 20.7731 41.6667 25 41.6667C34.2048 41.6667 41.6667 34.2049 41.6667 25.0001C41.6667 15.7953 34.2048 8.33341 25 8.33341C20.7731 8.33341 16.9138 9.90689 13.9757 12.5001H8.33181C12.1327 7.43989 18.1841 4.16675 25 4.16675C36.5058 4.16675 45.8333 13.4941 45.8333 25.0001C45.8333 36.5059 36.5058 45.8334 25 45.8334C18.1841 45.8334 12.1327 42.5603 8.33181 37.5001Z" />
              </svg>
            </button>
          </div>
        </div>

      
      
    </>
  );
}

export default LeftBarMobile;
