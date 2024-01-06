import React from "react";
import { Typography, Input } from "@material-tailwind/react";
import InputField from "../InputField";
import InputSearch from "../InputSearch/InputSearch";
import FormOptions from "../../FormOptions.json";
import useFormContext from "../../hooks/useFormContext";

function PersonalDetails() {
	const { data, handleChange,page } = useFormContext();

	return (
		<>
			<div className="min-w-full" id={page}>
				<div className="flex justify-between">
					<Typography
						variant="h4"
						color="blue-gray"
						className="dark:text-white"
					>
						Personal Details
					</Typography>
					<span className="text-bg_dark/60 dark:text-bg_light/40 md:hidden">
						1/8
					</span>
				</div>
				<div className="my-4 flex flex-col w-auto h-full">
					<div className="my-2 flex flex-col md:flex-row md:items-center gap-4">
						<div>
							<Typography
								variant="h6"
								color="blue-gray"
								className="mb-2 font-medium dark:text-white"
							>
								First Name
							</Typography>
							<InputField
								name="P1FirstName"
								id="P1FirstName"
								type="text"
								placeholder="Ramesh"
								required={true}
								value={data.P1FirstName}
								// onChange={handleChange}
							/>
						</div>
						<div>
							<Typography
								variant="h6"
								color="blue-gray"
								className="mb-2 font-medium dark:text-white"
							>
								Last Name
							</Typography>
							<InputField
								name="P1LastName"
								id="P1LastName"
								type="text"
								placeholder="Doe"
								required={true}
								value={data.P1LastName}
								// onChange={handleChange}
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
								Age
							</Typography>
							<InputField
								name="P1Age"
								id="P1Age"
								type="number"
								placeholder="21"
								min="0"
								required={true}
								value={data.P1Age}
								// onChange={handleChange}
							/>
						</div>
						<div>
							<Typography
								variant="h6"
								color="blue-gray"
								className="mb-2 font-medium dark:text-white"
							>
								Height
							</Typography>
							<InputField
								name="P1Height"
								id="P1Height"
								type="text"
								placeholder="5.2"
								required={true}
								value={data.P1Height}
								// onChange={handleChange}
							/>
						</div>
						<div>
							<Typography
								variant="h6"
								color="blue-gray"
								className="mb-2 font-medium dark:text-white"
							>
								Weight
							</Typography>
							<InputField
								name="P1Weight"
								id="P1Weight"
								type="text"
								placeholder="56"
								required={true}
								value={data.P1Weight}
								// onChange={handleChange}
							/>
						</div>
						<div className="md:w-60 w-full">
							<Typography
								variant="h6"
								color="blue-gray"
								className="mb-2 font-medium dark:text-white"
							>
								Date Of Birth
							</Typography>
							<InputField
								name="P1Dob"
								id="P1Dob"
								type="date"
								placeholder=""
								required={true}
								value={data.P1Dob}
								// onChange={handleChange}
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
								Place Of Birth
							</Typography>
							<InputSearch
								name="P1Pob"
								type="text"
								id="P1Pob"
								list={FormOptions.cities}
								keyType="city"
								value={data.P1Pob}
							/>
						</div>
						<div>
							<Typography
								variant="h6"
								color="blue-gray"
								className="mb-2 font-medium dark:text-white"
							>
								City
							</Typography>
							<InputSearch
								name="P1City"
								id="P1City"
								list={FormOptions.cities}
								keyType="city"
								value={data.P1City}
								required={true}
							/>
						</div>
						<div>
							<Typography
								variant="h6"
								color="blue-gray"
								className="mb-2 font-medium dark:text-white"
							>
								State
							</Typography>
							<InputSearch
								name="P1State"
								id="P1State"
								list={FormOptions.states}
								keyType="state"
								value={data.P1State}
								required={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PersonalDetails;
