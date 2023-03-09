import React, { FC, useState } from "react";

import { Container, Box } from "@mui/system";
import { styled } from "@mui/styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  TrackingForm,
  Header,
  TrackingData,
  TrackingStory,
} from "./components";

import { useAppDispatch } from "./hooks/reduxHooks";

import { setTBillOfLadingStory } from "./redux/slices/billOfLadingSlice";
import { getTrackingStatus } from "./redux/operations/trackingOperations";
import { EventOnChange, EventOnSubmit } from "./types/components.types";

const App: FC = () => {
  const [billOfLading, setBillOfLading] = useState("");
  const dispatch = useAppDispatch();

  const onChange = (event: EventOnChange) => {
    console.log("event.currentTarget.value IN APP", event.currentTarget.value);
    setBillOfLading(event.currentTarget.value);
  };

  const submitForm = (event: EventOnSubmit) => {
    event.preventDefault();
    const regex = /^\d{14}$/;
    if (!regex.test(billOfLading))
      return toast.warn("ТТН повинен складатися з 14 цифр");
    setBillOfLading("");
    dispatch(setTBillOfLadingStory(billOfLading));
    dispatch(getTrackingStatus(billOfLading));
  };

  const onClick = (billOfLading: string) => {
    setBillOfLading(billOfLading);
    dispatch(getTrackingStatus(billOfLading));
  };

  const DataWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "@media screen and (min-width:1200px)": {
      justifyContent: "space-between",
      flexDirection: "unset",
      alignItems: "unset",
    },
  });

  return (
    <>
      <Header />
      <section>
        <Container sx={{ pt: "3rem", pb: "3rem" }}>
          <TrackingForm
            billOfLading={billOfLading}
            onChange={onChange}
            submitForm={submitForm}
          />
          <DataWrapper>
            <TrackingData />
            <TrackingStory onClick={onClick} />
          </DataWrapper>
        </Container>
        <ToastContainer />
      </section>
    </>
  );
};

export default App;
