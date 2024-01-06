import React from "react";
import { Typography } from "@material-tailwind/react";
import InputField from "../InputField";
import InputSearch from "../InputSearch/InputSearch";
import FormOptions from "../../FormOptions.json";
import Dropdown from "../Dropdown";
import useFormContext from "../../hooks/useFormContext";

function FamilyBackground() {
	const { data, handleChange } = useFormContext();

	const content = (
		<div className="">
			<div className="flex justify-between">
				<Typography
					variant="h4"
					color="blue-gray"
					className="dark:text-white"
				>
				Family Background
				</Typography>
				<span className="text-bg_dark/60 dark:text-bg_light/40 md:hidden">
					2/8
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
							Religion
						</Typography>
						<InputSearch
							name="P2Religion"
							id="P2Religion"
							placeholder="Eg. Hindu"
							list={FormOptions.religions}
							keyType="religion"
							value={data.P2Religion}
							onChange={handleChange}
						/>
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="mb-2 font-medium dark:text-white"
						>
							Community
						</Typography>
						<InputSearch
							name="P2Community"
							id="P2Community"
							placeholder="Eg. Agarwal"
							list={FormOptions.communities}
							keyType="community"
							value={data.P2Community}
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
							Mother Tongue
						</Typography>
						<InputSearch
							name="P2MotherTongue"
							id="P2MotherTongue"
							placeholder="Eg. Gujarati"
							list={FormOptions.motherTongues}
							keyType="motherTongue"
							value={data.P2MotherTongue}
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
							Family Type
						</Typography>
						<InputSearch
							name="P2FamilyType"
							id="P2FamilyType"
							placeholder="Eg. Joint"
							list={FormOptions.familyTypes}
							keyType="familyType"
							value={data.P2FamilyType}
							onChange={handleChange}
						/>
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="mb-2 font-medium dark:text-white"
						>
							Family City
						</Typography>
						<InputSearch
							name="P2FamilyCity"
							id="P2FamilyCity"
							placeholder="Eg. Delhi"
							list={FormOptions.cities}
							keyType="city"
							value={data.P2FamilyCity}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);

	return content;
}

export default FamilyBackground;
