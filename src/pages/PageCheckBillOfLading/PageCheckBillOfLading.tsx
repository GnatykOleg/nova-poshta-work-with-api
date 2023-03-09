import React, { FC, useState } from "react";

import { Container } from "@mui/system";

import {
  TrackingForm,
  TrackingData,
  TrackingStory,
  Header,
} from "../../components";

import { useAppDispatch } from "../../hooks/reduxHooks";

import { setTBillOfLadingStory } from "../../redux/slices/billOfLadingSlice";
import { getTrackingStatus } from "../../redux/operations/trackingOperations";
import { EventOnChange, EventOnSubmit } from "../../types/components.types";

import { toast } from "react-toastify";

import * as Styled from "./PageCheckBillOfLading.styled";

const PageCheckBillOfLading: FC = () => {
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
          <Styled.DataWrapper>
            <TrackingData />
            <TrackingStory onClick={onClick} />
          </Styled.DataWrapper>
        </Container>
      </section>
    </>
  );
};

export default PageCheckBillOfLading;
