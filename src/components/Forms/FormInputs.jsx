import P1PersonalDetails from "./P1PersonalDetails";
import P2FamilyBackground from "./P2FamilyBackground";
import P3Qualification from "./P3Qualification";
import P4Others from "./P4Others";
import P5PartnerProfile from "./P5PartnerProfile";
import P6PartnerFamilyDetails from "./P6PartnerFamilyDetails";
import P7PartnerQualification from "./P7PartnerQualification";
import P8AboutYou from "./P8AboutYou";

import useFormContext from "../../hooks/useFormContext";

const FormInputs = () => {
  const { page } = useFormContext();

  const display = {
    0: <P1PersonalDetails />,
    1: <P2FamilyBackground />,
    2: <P3Qualification />,
    3: <P4Others />,
    4: <P5PartnerProfile />,
    5: <P6PartnerFamilyDetails />,
    6: <P7PartnerQualification />,
    7: <P8AboutYou />,
};

  const content = <div className="flex-col">{display[page]}</div>;

  return content;
};
export default FormInputs;
