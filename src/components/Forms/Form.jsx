import { useState } from "react";
import FormInputs from "./FormInputs";
import { useNavigate } from "react-router-dom";
import useFormContext from "../../hooks/useFormContext";
import { Alert } from "@material-tailwind/react";
import Button from "../Button";
import axios from "axios";
import { host } from "../../utils/APIRoutes";

export const RegisterSideBar = () => {
	const { page } = useFormContext();
	return (
		<p id={page} className="hidden">
			{page}
		</p>
	);
};

const Form = ({ setFormId }) => {
	const navigate = useNavigate();
	const [openAlert, setOpenAlert] = useState(false);

	const {
		page,
		setPage,
		data,
		title,
		canSubmit,
		disablePrev,
		disableNext,
		prevHide,
		nextHide,
		submitHide,
	} = useFormContext();

	const handlePrev = () => setPage((prev) => prev - 1);

	const handleFormId = () => setFormId(page);

	const handleNext = () => {
		setPage((prev) => prev + 1);
		handleFormId();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(data);
		// const data2 = new FormData(data);

		// try {

		// data.userId = "6572343b20e0ba4957caf1fa";
		const formData = new FormData();

		formData.append("P8ProfilePicture", data.P8ProfilePicture);
		// data.P8ProfilePicture = null;
		formData.append("OtherData", JSON.stringify(data));
		const token = localStorage.getItem("token");

		// const result = await axios.post(`https://match-made-back.onrender.com/user/update`, formData, {
		const result = await axios.post(
			`https://matchmade.onrender.com/user/update`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "multipart/form-data",
				},
				crossDomain: true,
				withCredentials: true,
			}
		);
		console.log(result.data);

		if (result.data.message.modifiedCount >= 1) {
			localStorage.setItem("horoscope", result.data.message.horoscope);
			navigate("/matchfeed");
		} else {
			setOpenAlert(!openAlert);
		}

		// const res = await fetch(`${host}/user/update`, {
		//   method: "POST",
		//   headers: { "Content-Type": "multipart/form-data" },
		//   body: JSON.stringify(data),
		// });

		// console.log(await user.json());

		// .post("http://192.168.56.1:3000/user/create", data)
		// .then((response) => {
		//   console.log(response);
		// })
		// .catch((error) => {
		//   console.log(error);
		// });
		//   console.log(res);
		// } catch (error) {
		//   console.log(error);
		// }
		// console.log(JSON.stringify(data));

		// console.log(data);
	};

	return (
		<form className="flex-col w-full" id={page}>
			<FormInputs />
			<footer>
				<div className="ml-1 flex gap-4">
					<button
						type="button"
						onClick={handlePrev}
						disabled={disablePrev}
						className={`flex p-2 rounded-xl w-full lg:w-1/6 border-solid border-2 text-bg_dark dark:text-bg_light  h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${prevHide}`}
					>
						Prev
					</button>

					<button
						type="button"
						onClick={handleNext}
						disabled={disableNext}
						className={`flex p-2 rounded-xl w-full lg:w-1/6 border-solid border-2 text-bg_dark dark:text-bg_light h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${nextHide}`}
					>
						Next
					</button>

					<button
						type="button"
						onClick={handleSubmit}
						disabled={!canSubmit}
						className={`flex p-2 rounded-xl w-full lg:w-1/6 border-solid border-2 text-bg_dark dark:text-bg_light h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${submitHide}`}
					>
						Submit
					</button>
				</div>
			</footer>
			<Alert
				open={openAlert}
				onClose={() => setOpenAlert(false)}
				color="white"
				animate={{
					mount: { y: 0 },
					unmount: { y: 100 },
				}}
			>
				Oops! You missed something...
			</Alert>
		</form>
	);
};

export default Form;
