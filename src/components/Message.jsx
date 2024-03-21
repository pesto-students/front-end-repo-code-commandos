import React from "react";

function Message({ our, children, id }) {
	return (
		<>
			{our ? (
				<div key={id} className="flex justify-end">
					<p className="flex items-end w-max max-w-lg rounded-t-3xl rounded-bl-3xl bg-button_light/40 dark:bg-button_dark dark:text-white p-4 gap-2">
						{children}
						<span className=" text-xs text-bg_dark/40 dark:text-blue-gray-100">
							21:10
						</span>
					</p>
				</div>
			) : (
				<div key={id} className="flex">
					<p className="flex items-end w-max max-w-lg rounded-t-3xl rounded-br-3xl bg-white/70 p-4 gap-2">
						{children}
						<span className=" text-xs text-bg_dark/40">21:10</span>
					</p>
				</div>
			)}
		</>
	);
}

export default Message;
