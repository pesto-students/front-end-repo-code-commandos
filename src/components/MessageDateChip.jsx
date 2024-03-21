import React from "react";
import { Chip } from "@material-tailwind/react";

function MessageDateChip({ children }) {
	return (
		<div className="flex justify-center">
			<Chip
				value={children}
				className="rounded-full w-min bg-button_light/40 text-black/70 dark:bg-button_dark/50 dark:text-white/70"
			/>
		</div>
	);
}

export default MessageDateChip;
