import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import { List, Typography, Input } from "@material-tailwind/react";

import ListingItem from "../components/ListingItem";
import Form, { RegisterSideBar } from "../components/Forms/Form";
import { FormProvider } from "../context/FormContext";

import useFormContext from "../hooks/useFormContext";

function Register() {

  const { page } = useFormContext();
  const [isSelected, setIsSelected] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);

  useEffect(() => {
    handleClick();
  }, [currentStep]);

  const handleClick = () => {
    console.log("Harshil" + currentStep);
    setIsSelected(!isSelected);
  };

  // const handleSwitch = (e) => {
  //   e.preventDefault();
  //   console.log(currentStep);
  //   setCurrentStep((prev) => prev + 1);
  // };

  // const handleChange = () => {};

  return (
    <>
      <FormProvider>
        <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
          <Header />
          <div className="grid grid-cols-12 h-screen mb-10 gap-3">
            {/* Left Listing - MD*/}
            <div className="hidden md:flex flex-col lg:col-span-2 md:col-span-3 rounded-tr-xl rounded-br-xl bg-card_light dark:bg-card_dark pt-8 col-span-0">
              <div className="" id={page}>
                <RegisterSideBar  id="reg-sidebar"/>
                <List className="text-black min-w-full dark:text-white">
                  <ListingItem
                    selected={currentStep == -1}
                    completed={currentStep >= 0}
                    onClick={handleClick}
                  >
                    Personal
                  </ListingItem>
                  <ListingItem
                    selected={currentStep == 0}
                    completed={currentStep >= 1}
                    onClick={handleClick}
                  >
                    Family Background
                  </ListingItem>
                  <ListingItem
                    selected={currentStep == 1}
                    completed={currentStep >= 2}
                    onClick={handleClick}
                  >
                    Qualification
                  </ListingItem>
                  <ListingItem
                    selected={currentStep == 2}
                    completed={currentStep >= 3}
                    onClick={handleClick}
                  >
                    LifeStyle
                  </ListingItem>
                  <ListingItem
                    selected={currentStep == 3}
                    completed={currentStep >= 4}
                    onClick={handleClick}
                  >
                    Partner's Detail
                  </ListingItem>
                  <ListingItem
                    selected={currentStep == 4}
                    completed={currentStep >= 5}
                    onClick={handleClick}
                  >
                    Partner's Family
                  </ListingItem>
                  <ListingItem
                    selected={currentStep == 5}
                    completed={currentStep >= 6}
                    onClick={handleClick}
                  >
                    Partner's Qualification
                  </ListingItem>
				  <ListingItem
                    selected={currentStep == 6}
                    completed={currentStep >= 7}
                    onClick={handleClick}
                  >
                    About You
                  </ListingItem>
                </List>
              </div>
            </div>

            {/* Right Body */}
            <div className="rounded-tl-xl rounded-bl-xl bg-card_light dark:bg-card_dark col-span-12 lg:col-span-10 md:col-span-9 p-10">
              <div className="pt-1 flex flex-col gap-4 justify-between w-full h-full">
                <div className="flex container h-full">
                  {/* <FormProvider> */}
                  <Form setFormId={setCurrentStep} />
                  {/* </FormProvider> */}
                </div>

                {/* <div className="flex gap-4 w-96 ">
                <Button onClick={(e) => handleSwitch(e)} type="button">BACK</Button>
                <Button onClick={(e) => handleSwitch(e)} type="button">NEXT</Button>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
}

export default Register;
