import { useState } from "react";
import React from "react";
import {host} from "../utils/APIRoutes";

function RightCard() {
  const [gender, setGender] = useState("Bride");
  const [phone, setPhone] = useState();

  const [stage, setStage] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gender, phone);

    // TODO: Add Backend Request
    // onSuccess:
    setStage(1);
    // onFailure: id:phone-error = visible
    // if (true) {
    //     document.getElementById("phone-error").classList.remove("hidden")
    // }
  };

  return (
    <>
      <div className=" pb-24 pt-6 flex flex-col ml-4 h-full w-1/3 rounded-bl-xl rounded-tl-xl bg-card_light justify-around dark:bg-card_dark">
        {stage === 0 ? (
          <>
            {/*log-Reg*/}
            <div className="flex justify-around">
              <a href={`${host}`}>
                <h1 className="font-extrabold text-7xl dark:text-font_dark">
                  Login
                </h1>
              </a>
              <a href={`${host}`}>
                <h1 className="font-extrabold text-7xl dark:text-font_dark">
                  Register
                </h1>
              </a>
            </div>
            {/* tag-line  */}
            <div className="flex justify-center dark:text-font_dark">
              <p className="flex font-light text-4xl px-10">
                Meet Your Soulmate & The Perfect Match Is Just a Click Away
              </p>
            </div>
            <form
              className="flex flex-col"
              action="#"
              method="get"
              onSubmit={handleSubmit}
            >
              {/* Bride Groom Button */}
              <div className="flex px-10 dark:text-font_dark">
                <label className="flex font-normal text-xl">
                  You are looking for :
                </label>
              </div>
              <div className="flex px-10 pt-10 justify-start dark:text-font_dark dark:accent-slate-50">
                <div>
                  <input
                    type="radio"
                    id="bride"
                    name="partner"
                    value="bride"
                    className="overflow-hidden absolute w-0 peer"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label
                    htmlFor="bride"
                    className="flex flex-col rounded-xl border-solid border-2 w-40 h-40 border-bg_dark font-light items-center justify-center hover:bg-button_light peer-checked:bg-button_light peer-checked:z-10 peer-checked:ring-4 peer-checked:ring-button_light peer-checked:border-2 peer-checked:border-bg_light dark:border-bg_light dark:hover:bg-button_dark  dark:peer-checked:bg-button_dark dark:peer-checked:z-10 dark:peer-checked:ring-4 dark:peer-checked:ring-button_dark dark:peer-checked:border-2 dark:peer-checked:border-bg_dark // peer-focus:bg-button_light peer-focus:z-10 peer-focus:ring-4 peer-focus:ring-button_light peer-focus:border-2 peer-focus:border-bg_light  dark:peer-focus:bg-button_dark dark:peer-focus:z-10 dark:peer-focus:ring-4 dark:peer-focus:ring-button_dark dark:peer-focus:border-2 dark:peer-focus:border-bg_dark"
                  >
                    <svg
                      className="w-20 fill-bg_dark dark:fill-bg_light"
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
                    name="partner"
                    value="groom"
                    className="overflow-hidden absolute w-0 peer"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label
                    htmlFor="groom"
                    className="ml-4 flex flex-col rounded-xl border-solid border-2 w-40 h-40 border-bg_dark font-light items-center justify-center hover:bg-button_light peer-checked:bg-button_light peer-checked:z-10 peer-checked:ring-4 peer-checked:ring-button_light peer-checked:border-2 peer-checked:border-bg_light dark:border-bg_light dark:hover:bg-button_dark  dark:peer-checked:bg-button_dark dark:peer-checked:z-10 dark:peer-checked:ring-4 dark:peer-checked:ring-button_dark dark:peer-checked:border-2 dark:peer-checked:border-bg_dark // peer-focus:bg-button_light peer-focus:z-10 peer-focus:ring-4 peer-focus:ring-button_light peer-focus:border-2 peer-focus:border-bg_light  dark:peer-focus:bg-button_dark dark:peer-focus:z-10 dark:peer-focus:ring-4 dark:peer-focus:ring-button_dark dark:peer-focus:border-2 dark:peer-focus:border-bg_dark"
                  >
                    <svg
                      className="w-20 fill-bg_dark dark:fill-bg_light"
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
              {/* Mobile Number */}
              <div className="flex px-10 pt-10 justify-start">
                <div>
                  <label
                    htmlFor="phone"
                    className="flex font-normal text-xl dark:text-font_dark"
                  >
                    Your phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    // className=" focus:border-button_dark focus:border-b-2 focus:border-x-0 focus:border-t-0 bg-card_light border-b-2 border-bg_dark w-full h-10 text-font_light dark:bg-card_dark dark:border-bg_light dark:text-font_dark dark:focus:border-button_light"
                    className=" focus:outline-none focus:border-x-0 bg-card_light border-b-2 border-bg_dark w-full h-10 text-font_light dark:bg-card_dark dark:border-bg_light dark:text-font_dark dark:focus:border-font_light"
                    placeholder="123-4545-678"
                    pattern="[1-9]{1}[0-9]{9}"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <p id="phone-error" className=" text-red-800 hidden">
                    Invalid phone number
                  </p>
                </div>
              </div>
              <div className="flex px-10 pt-10 justify-start h-24 dark:text-font_dark">
                <button
                  type="submit"
                  className="flex flex-col rounded-xl border-solid border-2 w-full h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark"
                >
                  Search your best partner
                </button>
              </div>
            </form>
          </>
        ) : stage === 1 ? (
          <>
            {/*back Button*/}
            <div className="flex justify-start pl-16 pt-6">
              <button onClick={() => setStage(0)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className=" w-12 fill-bg_dark dark:fill-bg_light"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"></path>
                </svg>
              </button>
            </div>
            {/*OTP form*/}
            <form className="flex flex-col" action="#" method="get">
              <div className="flex flex-col mt-16">
                <h1 className=" flex font-extrabold text-3xl dark:text-font_dark justify-center">
                  Phone Verification
                </h1>
                <p className=" flex dark:text-font_dark justify-center">
                  We have send an OTP to the provided number
                </p>
              </div>
              <div className="flex space-x-4 mt-16 justify-center">
                <div class="h-12 w-[228px]">
                  <input
                    class="text-sm w-full h-full tracking-[26px] flex flex-col  pl-6 items-center justify-center focus:outline-none focus:border-x-0 bg-card_light border-b-2 border-bg_dark text-font_light dark:bg-card_dark dark:border-bg_light dark:text-font_dark dark:focus:border-font_light"
                    type="tel"
                    id="Number"
                    pattern="[0-9]{6}"
                    maxlength={6}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="flex px-10 pt-10 justify-start h-24 dark:text-font_dark">
                <button
                  type="submit"
                  className="flex flex-col rounded-xl border-solid border-2 w-full h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark"
                  onClick={() => setStage(2)}
                >
                  Verify Number
                </button>
              </div>
            </form>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default RightCard;
