import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { clearTBillOfLadingStory } from "../../../redux/slices/billOfLadingSlice";
import { billOfLadingDataSelector } from "../../../redux/selectors/billOfLadingSelectors";

import { ITrackingStoryProps } from "../../../types/tracking-components.types";

import { Typography, Button, CardActions } from "@mui/material";

import * as Styled from "./TrackingStory.styled";

const TrackingStory: React.FC<ITrackingStoryProps> = ({
  onClick,
}: ITrackingStoryProps) => {
  const dispatch = useAppDispatch();

  const story = useAppSelector(billOfLadingDataSelector);

  return (
    <Styled.MyCard>
      <Styled.MyCardContent>
        <Typography variant="h5">Історія:</Typography>
        {story.map((billOfLading: string) => (
          <Button key={nanoid()} onClick={() => onClick(billOfLading)}>
            <Typography variant="h6" component={"p"}>
              ТТН : {billOfLading}
            </Typography>
          </Button>
        ))}
      </Styled.MyCardContent>
      <CardActions>
        <Button
          onClick={() => dispatch(clearTBillOfLadingStory())}
          sx={{ mt: "1rem" }}
          type="submit"
          variant="outlined"
        >
          Очистити iсторію ТТН
        </Button>
      </CardActions>
    </Styled.MyCard>
  );
};

export default TrackingStory;
