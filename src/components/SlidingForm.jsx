import React, { useState } from "react";

const questions = [
	"What is your name?",
	"What is your email?",
	"What is your favorite color?",
	// Add more questions as needed
];

const SlidingForm = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [formData, setFormData] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleNext = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion((prevQuestion) => prevQuestion + 1);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
			<h1 className="text-2xl font-bold mb-4">Sliding Form</h1>

			<div className="overflow-hidden transition-transform ease-in-out duration-300">
				{questions.map((question, index) => (
					<div
						key={index}
						className={`transform ${
							index === currentQuestion
								? "translate-x-0"
								: "translate-x-full"
						}`}
					>
						<label>{question}</label>
						<input
							type="text"
							name={`question${index}`}
							value={formData[`question${index}`] || ""}
							onChange={handleInputChange}
							className="block w-full p-2 border rounded mt-2"
						/>
					</div>
				))}
			</div>

			<div className="flex justify-between mt-4">
				{currentQuestion > 0 && (
					<button
						className="btn"
						onClick={() => setCurrentQuestion((prev) => prev - 1)}
					>
						Previous
					</button>
				)}

				{currentQuestion < questions.length - 1 ? (
					<button className="btn" onClick={handleNext}>
						Next
					</button>
				) : (
					<button
						className="btn"
						onClick={() => alert("Form submitted!")}
					>
						Submit
					</button>
				)}
			</div>
		</div>
	);
};

export default SlidingForm;
