import React from "react";
import { ListItem, ListItemPrefix } from "@material-tailwind/react";

function ListingItem({ children, selected, completed }) {
	
	if (selected && completed) {
		return (
			<ListItem className="bg-button_light hover:bg-button_light dark:bg-button_dark hover:dark:bg-button_dark">
				<ListItemPrefix>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-6 h-6 fill-green-800"
					>
						<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
					</svg>
				</ListItemPrefix>
				{children}
			</ListItem>
		);
	} else if (selected) {
		return (
			<ListItem className="bg-button_light hover:bg-button_light/30 dark:bg-button_dark dark:hover:bg-button_dark dark:text-white">
				<ListItemPrefix>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-5 h-5"
					>
						<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
					</svg>
				</ListItemPrefix>
				{children}
			</ListItem>
		);
	} else if (completed) {
		return (
			<ListItem className="hover:bg-button_light/30 dark:hover:bg-button_dark/30 dark:text-white">
				<ListItemPrefix>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-6 h-6 fill-green-800"
					>
						<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
					</svg>
				</ListItemPrefix>
				{children}
			</ListItem>
		);
	} else {
		return (
			<ListItem className=" hover:bg-button_light/30 dark:hover:bg-button_dark/30 dark:text-white">
				<ListItemPrefix>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-5 h-5"
					>
						<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
					</svg>
				</ListItemPrefix>
				{children}
			</ListItem>
		);
	}
}

export default ListingItem;
