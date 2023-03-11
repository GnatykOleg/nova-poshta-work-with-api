import React, { FC, useState } from "react";

import { Container } from "@mui/system";

import {
  TrackingForm,
  TrackingData,
  TrackingStory,
  Header,
} from "../../components/Tracking";

import { useAppDispatch } from "../../hooks/reduxHooks";

import { setTBillOfLadingStory } from "../../redux/slices/billOfLadingSlice";
import { getTrackingStatus } from "../../redux/operations/trackingOperations";
import {
  EventOnChange,
  EventOnSubmit,
} from "../../types/tracking-components.types";

import { toast } from "react-toastify";

const PageCheckBillOfLading: FC = () => {
  const [billOfLading, setBillOfLading] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const onChange = (event: EventOnChange) => {
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

  const sidebarHandler = () => {
    setIsSideBarOpen((state) => !state);
  };

  return (
    <>
      <Header />

      <section>
        <TrackingStory
          onClick={onClick}
          sidebarHandler={sidebarHandler}
          isSideBarOpen={isSideBarOpen}
        />
        <Container
          sx={{
            pt: "3rem",
            pb: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TrackingForm
            billOfLading={billOfLading}
            onChange={onChange}
            submitForm={submitForm}
            sidebarHandler={sidebarHandler}
          />
          <TrackingData />
        </Container>
      </section>
    </>
  );
};

export default PageCheckBillOfLading;
