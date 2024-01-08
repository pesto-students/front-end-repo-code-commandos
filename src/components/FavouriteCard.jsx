import React, { useState } from "react";
import {Card, CardHeader, Typography, CardBody, IconButton} from "@material-tailwind/react"

function FavouriteCard({ name, id }) {
  const [favouriteButton, unsetFavouriteButton] = useState("fill-red-400");
  const [favouriteButtonOutline, unsetFavouriteButtonOutline] = useState("");

  function handlefavourite() {
    unsetFavouriteButton("fill-none");
    unsetFavouriteButtonOutline("currentColor");
  }

  return (
    <li className="h-22" key={id}>
      <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="card-image"
            className="w-20 object-cover object-top h-20"
          />
        </CardHeader>
        <CardBody className="w-full overflow-hidden truncate flex justify-between items-center pl-1 pr-6">
          <Typography variant="h5" color="blue-gray" className="">
            {name}
          </Typography>
          <div className="flex gap-4 justify-center items-center">
            <IconButton
              variant="text"
              className="rounded-full"
              onClick={handlefavourite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={`${favouriteButtonOutline}`}
                className={`w-6 h-6 ${favouriteButton}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </IconButton>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </CardBody>
      </Card>
    </li>
  );
}

export default FavouriteCard;
