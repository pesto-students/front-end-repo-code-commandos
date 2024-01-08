import React from "react";
import { Typography } from "@material-tailwind/react";
import InputChip from "../InputChip";
import InputSearch from "../InputSearch/InputSearch";
import FormOptions from "../../FormOptions.json";
import useFormContext from "../../hooks/useFormContext";

function PartnerProfile() {
	const { data, handleChange } = useFormContext();

	return (
		<div className="">
			<div className="flex justify-between">
				<Typography
					variant="h4"
					color="blue-gray"
					className="dark:text-white"
				>
					Partner Preference 
				</Typography>
				<span className="text-bg_dark/60 dark:text-bg_light/40 md:hidden">
					5/8
				</span>
			</div>
			<div className="my-4 flex flex-col h-full">
				<div className="my-2 flex flex-col md:flex-row md:items-center gap-4">
					<div className="md:w-60 w-full">
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
							list="ages"
							keyType="age"
							value={data.P5AgeRange}
							onChange={handleChange}
						/>
					</div>
					<div className="md:w-60 w-full">
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
							list="maritialStatuses"
							keyType="maritialStatus"
							value={data.P5MaritialPreference}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="my-2 flex flex-col md:flex-row md:items-center gap-4">
					<div className="md:w-60 w-full">
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
							list="diets"
							keyType="diet"
							value={data.P5PartnerDiet}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="my-2 flex flex-col md:flex-row md:items-center gap-4">
					<div className="md:w-60 w-full">
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
							list="cities"
							keyType="city"
							value={data.P5PartnerCity}
							onChange={handleChange}
						/>
					</div>
					<div className="md:w-60 w-full">
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
							list="states"
							keyType="state"
							value={data.P5PartnerState}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PartnerProfile;
