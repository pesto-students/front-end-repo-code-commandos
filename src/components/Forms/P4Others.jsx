import React from "react";
import { Typography } from "@material-tailwind/react";
import InputSearch from "../InputSearch/InputSearch";
import FormOptions from "../../FormOptions.json";
import InputChip from "../InputChip";
import useFormContext from "../../hooks/useFormContext";

function Others() {
	const { data, handleChange } = useFormContext();

	return (
		<div className="">
			<div className="flex justify-between">
				<Typography
					variant="h4"
					color="blue-gray"
					className="dark:text-white"
				>
					Other Details
				</Typography>
				<span className="text-bg_dark/60 dark:text-bg_light/40 md:hidden">
					4/8
				</span>
			</div>
			<div className="my-4 flex flex-col w-full h-full">
				<div className="my-2 flex flex-col md:flex-row md:items-center gap-4">
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="mb-2 font-medium dark:text-white"
						>
							Marital Status
						</Typography>
						<InputSearch
							name="P4MaritialStatus"
							id="P4MaritialStatus"
							placeholder="Eg. Never"
							list={FormOptions.maritialStatuses}
							keyType="maritialStatus"
							value={data.P4MaritialStatus}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="my-2 flex flex-col md:flex-row md:items-center gap-4">
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="mb-2 font-medium dark:text-white"
						>
							Diet
						</Typography>
						<InputSearch
							name="P4Diet"
							id="P4Diet"
							placeholder="Eg. Vegetarian"
							list={FormOptions.diets}
							keyType="diet"
							value={data.P4Diet}
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
							Hobby
						</Typography>
						<InputChip
							name="P4Hobby"
							id="P4Hobby"
							list="hobbies"
							keyType="hobby"
							value={data.P4Hobby}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Others;
