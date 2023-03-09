import React from "react";
import { Button } from "@mui/material";
import { ITrackingFormProps } from "../../types/components.types";
import * as Styled from "./TrackingForm.styled";

const TrackingForm: React.FC<ITrackingFormProps> = ({
  onChange,
  billOfLading,
  submitForm,
}: ITrackingFormProps): JSX.Element => {
  return (
    <Styled.Form onSubmit={(event) => submitForm(event)}>
      <Styled.Input
        variant="outlined"
        label="Введiть ТТН"
        type="text"
        value={billOfLading}
        onChange={(event) => onChange(event)}
      />
      <Button type="submit" variant="outlined">
        Отримати статус ТТН
      </Button>
    </Styled.Form>
  );
};

export default TrackingForm;
