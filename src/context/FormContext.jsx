import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Personal Details",
    1: "Family Background",
    2: "Qualification",
    3: "LifeStyle",
    4: "Partner Details",
    5: "Partner Family",
    6: "Partner Qualification",
    7: "About You",
  };

  const [page, setPage] = useState(0);
  const [profile, setProfile] = useState({});
  const [data, setData] = useState({
    P1FirstName: "",
    P1LastName: "",
    P1Age: "",
    P1Height: "",
    P1Weight: "",
    P1Dob: "",
    P1Pob: "",
    P1City: "",
    P1State: "",
    P2Religion: "",
    P2Community: "",
    P2MotherTongue: "",
    P2FamilyType: "",
    P2FamilyCity: "",
    P3Qualification: "",
    P3University: "",
    P3Profession: "",
    P3Organization: "",
    P3AnnualIncome: "",
    P4MaritialStatus: "",
    P4Diet: "",
    P4Hobby: "",
    P5AgeRange: "",
    P5MaritialPreference: "",
    P5PartnerDiet: "",
    P5PartnerCity: "",
    P5PartnerState: "",
    P6PartnerReligion: "",
    P6PartnerCommunity: "",
    P6PartnerFamilyType: "",
    P7PartnerQualification: "",
    P7PartnerProfession: "",
    P7PartnerAnnualIncome: "",
    P8ProfilePicture: "",
    P8ProfileEmail: "",
    P8ProfileDescription: "",
  });

  const { ...requiredInputs } = data;

  const canSubmit =
    // [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("P1"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("P2"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage3 = Object.keys(data)
    .filter((key) => key.startsWith("P3"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage4 = Object.keys(data)
    .filter((key) => key.startsWith("P4"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage5 = Object.keys(data)
    .filter((key) => key.startsWith("P5"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage6 = Object.keys(data)
    .filter((key) => key.startsWith("P6"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage7 = Object.keys(data)
    .filter((key) => key.startsWith("P7"))
    .map((key) => data[key])
    .every(Boolean);

  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2) ||
    (page === 2 && !canNextPage3) ||
    (page === 3 && !canNextPage4) ||
    (page === 4 && !canNextPage5) ||
    (page === 5 && !canNextPage6) ||
    (page === 6 && !canNextPage7);

  const prevHide = page === 0 && "hidden";

  const nextHide = page === Object.keys(title).length - 1 && "hidden";

  const submitHide = page !== Object.keys(title).length - 1 && "hidden";

  const handleChange = (e) => {
    console.log("H::" + e.target.value);
    const type = e.target.type;

    const id = e.target.id;
    console.log(id + type);
    let value = type === "checkbox" ? e.target.checked : e.target.value;
    if (type === "file") {
      value = e.target.files[0];
      console.log(e.target.files[0]);
    }
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // console.log(
    //   Object.keys(data)
    //     .filter((key) => key.startsWith("P5"))
    //     .map((key) => data[key])
    // );

    // console.log(data);
  };

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        profile,
        setProfile,
        canSubmit,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
