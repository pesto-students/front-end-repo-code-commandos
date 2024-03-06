import React, { useState } from "react";
import { Typography, Input } from "@material-tailwind/react";
import InputField from "../InputField";
import InputSearch from "../InputSearch/InputSearch";
import FormOptions from "../../FormOptions.json";
import useFormContext from "../../hooks/useFormContext";

function AboutYou() {
  const { data, handleChange, page } = useFormContext();

  const [profilePic, setProfilePic] = useState(
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = () => reject(error);
    })
  }

  const handlePreview = async (e) => {
    const file = {data:e.target.files[0],id:e.target.id,type:'file'}
    setProfilePic(URL.createObjectURL(file.data));
    const base64 = await convertToBase64(file.data);
    handleChange({target:{...file, value:base64}});
  };

  return (
    <>
      <div className="min-w-full">
        <div className="flex justify-between">
          <Typography
            variant="h4"
            color="blue-gray"
            className="dark:text-white"
          >
            About You
          </Typography>
          <span className="text-bg_dark/60 dark:text-bg_light/40 md:hidden">
            8/8
          </span>
        </div>
        <div className="my-4 flex flex-col w-auto h-full">
          <div className="my-2 flex flex-col md:flex-row md:items-center gap-4">
            <div className="md:w-48 w-full">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium dark:text-white"
              >
                Profile Picture
              </Typography>

              <img
                className="h-full w-full rounded-lg object-cover object-center mt-2"
                src={profilePic || data.P8ProfilePicture || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="profile image"
              />
              <label className="flex p-2 cursor-pointer rounded-xl border-solid border-2 text-bg_dark dark:text-bg_light w-full h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark mt-2">
                upload
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  name="P8ProfilePicture"
                  id="P8ProfilePicture"
                  className="hidden"
                  onChange={handlePreview}
                />
              </label>
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium dark:text-white"
              >
                Email
              </Typography>
              <InputField
                name="P8ProfileEmail"
                id="P8ProfileEmail"
                type="email"
                placeholder="ramesh@gmail.com"
                required={true}
                value={data.P8ProfileEmail}
                // onChange={handleChange}
              />
              <div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mt-4 mb-2 font-medium dark:text-white"
                >
                  Description
                </Typography>
                <InputField
                  name="P8ProfileDescription"
                  id="P8ProfileDescription"
                  type="textarea"
                  placeholder="I'm a morning person, who loves to do adventurous hikes & loves cooking..."
                  required={true}
                  value={data.P8ProfileDescription}
                  // onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="my-2 flex flex-col md:flex-row md:items-center gap-4">
            {/* <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium dark:text-white"
              >
                Description
              </Typography>
              <InputField
                name="P8ProfileDescription"
                id="P8ProfileDescription"
                type="textarea"
                placeholder="I'm a morning person, who loves to do adventurous hikes & loves cooking..."
                min="0"
                required={true}
                value={data.P8ProfileDescription}
                onChange={handleChange}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutYou;
