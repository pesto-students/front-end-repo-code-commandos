import React from 'react'
import {
    Typography,
    Input,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";
import InputChip from "../components/InputChip";

function PersonalPreference() {
  return (
    <div>  {/* P5 */}
    <div className="">
      <div className="flex justify-between">
        <Typography
          variant="h4"
          color="blue-gray"
          className="dark:text-white"
        >
          Partner Preference
        </Typography>
      </div>
      <div className="my-4 flex flex-col md:w-4/6 lg:w-auto h-full">
        <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Age Range
            </Typography>
            <InputChip
              name="P5AgeRange"
              id="P5AgeRange"
              value={userData?.ageRange}
              list="ages"
              keyType="age"
              //value={data?.P5AgeRange}
              onChange={handleChange}
            />
          </div>
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Maritial Preference
            </Typography>
            <InputChip
              name="P5MaritialPreference"
              id="P5MaritialPreference"
              value={userData?.maritialPreference}
              list="maritialStatuses"
              keyType="maritialStatus"
              //value={data?.P5MaritialPreference}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Diet
            </Typography>
            <InputChip
              name="P5PartnerDiet"
              id="P5PartnerDiet"
              value={userData?.partnerDiet}
              list="diets"
              keyType="diet"
              //value={data?.P5PartnerDiet}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="lg:w-60 w-full">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Hobby
                          </Typography>
                          <InputChip
                            name="P4Hobby"
                            id="P4Hobby"
                            value={userData?.hobby}
                            list="hobbies"
                            keyType="hobby"
                            //value={data?.P4Hobby}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
        <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              City
            </Typography>
            <InputChip
              name="P5PartnerCity"
              id="P5PartnerCity"
              value={userData?.partnerCity}
              list="cities"
              keyType="city"
              //value={data?.P5PartnerCity}
              onChange={handleChange}
            />
          </div>
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              State
            </Typography>
            <InputChip
              name="P5PartnerState"
              id="P5PartnerState"
              value={userData?.partnerState}
              list="states"
              keyType="state"
              //value={data?.P5PartnerState}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
    {/* P6 */}
    <div className="">
      <div className="flex justify-between">
        <Typography
          variant="h4"
          color="blue-gray"
          className="dark:text-white"
        >
          Partner's Family Background
        </Typography>
      </div>
      <div className="my-4 flex flex-col md:w-4/6 lg:w-auto w-full h-full">
        <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Religion
            </Typography>
            <InputChip
              name="P6PartnerReligion"
              id="P6PartnerReligion"
              value={userData?.partnerReligion}
              list="religions"
              keyType="religion"
              //value={data?.P6PartnerReligion}
              onChange={handleChange}
            />
          </div>
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Community
            </Typography>
            <InputChip
              name="P6PartnerCommunity"
              id="P6PartnerCommunity"
              value={userData?.partnerCommunity}
              list="communities"
              keyType="community"
              //value={data?.P6PartnerCommunity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-2 flex items-center gap-4">
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Family Type
            </Typography>
            <InputChip
              name="P6PartnerFamilyType"
              id="P6PartnerFamilyType"
              value={userData?.partnerFamilyType}
              list="familyTypes"
              keyType="familyType"
              //value={data?.P6PartnerFamilyType}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
    {/* P7 */}
    <div className="">
      <div className="flex justify-between">
        <Typography
          variant="h4"
          color="blue-gray"
          className="dark:text-white"
        >
          Partner's Qualification and Profession
        </Typography>
      </div>
      <div className="my-4 flex flex-col md:w-4/6 lg:w-auto w-full h-full">
        <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Qualification Preference
            </Typography>
            <InputChip
              name="P7PartnerQualification"
              id="P7PartnerQualification"
              value={userData?.partnerQualification}
              list="qualifications"
              keyType="qualification"
              //value={data?.P7PartnerQualification}
              onChange={handleChange}
            />
          </div>
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Partner's Profession
            </Typography>
            <InputChip
              name="P7PartnerProfession"
              id="P7PartnerProfession"
              value={userData?.partnerProfession}
              list="professions"
              keyType="profession"
              //value={data?.P7PartnerProfession}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="lg:w-60 w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Annual Income
            </Typography>
            <InputChip
              name="P7PartnerAnnualIncome"
              id="P7PartnerAnnualIncome"
              value={userData?.partnerAnnualIncome}
              list="annualIncomes"
              keyType="annualIncome"
              //value={data?.P7PartnerAnnualIncome}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default PersonalPreference