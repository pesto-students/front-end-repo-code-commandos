import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import {
  Typography,
  Chip,
  Checkbox,
  Textarea,
  IconButton,
} from "@material-tailwind/react";

function Conversation({onClick, firstName,lastName, image}) {
  //   useEffect(() => {
  //     const matchId = conversation.member.find(
  //       (m) => m !== "65661c786bd9afa3c606938d"
  //     );

  //     const getUser = async ()=>{
  //         const res = await axios()
  //     }
  //   }, [matcharray]);

  return (
    <>
      <li className="h-22" onClick={onClick}>
        <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2 shadow-none">
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
          <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                {firstName+" "+lastName}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className=" font-extralight"
              >
                {/* Like so many organizations these days */}
              </Typography>
            </div>
          </CardBody>
          <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
            <p className="text-xs font-semibold"></p>
          </div>
        </Card>
      </li>
    </>
  );
}

export default Conversation;
