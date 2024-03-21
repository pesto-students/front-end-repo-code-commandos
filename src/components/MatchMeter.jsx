import React, { useState, useEffect } from "react";
import MatchList from "./MatchList";
import MatchListItem from "./MatchListItem";

function MatchMeter({ clicked, children }) {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    setBar(children.totalScore > 100 ? "100" : children.totalScore);
  }, [children.totalScore]);

  return (
    <>
      <div className="justify-center py-4 flex flex-col gap-4 text-bg_dark dark:text-bg_light items-center">
        <p className="">Match Meter</p>
        <p className=" text-5xl font-semibold">{bar}%</p>

        {!clicked ? (
          <div className="relative mt-4 h-[60vh] w-20 bg-bg_light rounded-xl border-2 border-bg_light dark:border-bg_light mx-auto">
            <div
              style={{ height: `${bar}%` }}
              className={`absolute bottom-0 bg-button_light dark:bg-button_dark w-[76px] rounded-lg`}
            ></div>
          </div>
        ) : (
          <MatchList>
            <MatchListItem
              description="Partner Age"
              tick={children.partnerAge}
            />
            <MatchListItem
              description="Partner MaritialStatus"
              tick={children.partnerMaritialStatus}
            />
            <MatchListItem
              description="Partner Diet"
              tick={children.partnerDiet}
            />
            <MatchListItem
              description="Partner City"
              tick={children.partnerCity}
            />
            <MatchListItem
              description="Partner Religion"
              tick={children.partnerReligion}
            />
            <MatchListItem
              description="Partner Community"
              tick={children.partnerCommunity}
            />
            <MatchListItem
              description="Partner FamilyType"
              tick={children.partnerFamilyType}
            />
            <MatchListItem
              description="Partner Qualification"
              tick={children.partnerQualification}
            />
            <MatchListItem
              description="Partner Profession"
              tick={children.partnerProfession}
            />
            <MatchListItem
              description="Partner AnnualIncome"
              tick={children.partnerAnnualIncome}
            />
            <MatchListItem
              description="Partner Hobbies"
              tick={children.partnerHobby}
            />
          </MatchList>
        )}
      </div>
    </>
  );
}

export default MatchMeter;
