import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Chip,
} from "@material-tailwind/react";

function FriendRecievedCard({ name, image, children, id }) {
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
        <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
          <Typography variant="h5" color="blue-gray" className="">
            {name}
          </Typography>
          <div className="flex gap-4">{children}</div>
        </CardBody>
      </Card>
    </li>
  );
}

export default FriendRecievedCard;
