import React from "react";
import { Typography } from "@material-tailwind/react";

import InputSearch from "../InputSearch/InputSearch";
import FormOptions from "../../FormOptions.json";

import useFormContext from "../../hooks/useFormContext";

function FamilyBackground() {
	const { data, handleChange } = useFormContext();

	return (
		<div className="">
			<div className="flex justify-between">
				<Typography
					variant="h4"
					color="blue-gray"
					className="dark:text-white"
				>
					Personal Details Qualification & Profession
				</Typography>
				<span className="text-bg_dark/60 dark:text-bg_light/40 md:hidden">
					3/8
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
							Qualification
						</Typography>
						<InputSearch
							name="P3Qualification"
							id="P3Qualification"
							placeholder="Eg. Bachelors"
							list={FormOptions.qualifications}
							keyType="qualification"
							value={data.P3Qualification}
							onChange={handleChange}
						/>
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="mb-2 font-medium dark:text-white"
						>
							University
						</Typography>
						<InputSearch
							name="P3University"
							id="P3University"
							placeholder="Eg. Nirma University"
							list={FormOptions.universities}
							keyType="university"
							value={data.P3University}
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
							Profession
						</Typography>
						<InputSearch
							name="P3Profession"
							id="P3Profession"
							placeholder="Eg. Civil Services"
							list={FormOptions.professions}
							keyType="profession"
							value={data.P3Profession}
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
							Organization
						</Typography>
						<InputSearch
							name="P3Organization"
							id="P3Organization"
							placeholder="Eg. Adani Group"
							list={FormOptions.organizations}
							keyType="organization"
							value={data.P3Organization}
							onChange={handleChange}
						/>
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="mb-2 font-medium dark:text-white"
						>
							Annual Income
						</Typography>
						<InputSearch
							name="P3AnnualIncome"
							id="P3AnnualIncome"
							placeholder="Eg. 5 Lakhs"
							list={FormOptions.annualIncomes}
							keyType="annualIncome"
							value={data.P3AnnualIncome}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FamilyBackground;
