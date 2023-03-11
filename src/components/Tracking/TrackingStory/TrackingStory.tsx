import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { clearTBillOfLadingStory } from "../../../redux/slices/billOfLadingSlice";
import { billOfLadingDataSelector } from "../../../redux/selectors/billOfLadingSelectors";

import { ITrackingStoryProps } from "../../../types/tracking-components.types";

import { Typography, Button, Drawer, Divider, IconButton } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import * as Styled from "./TrackingStory.styled";

const TrackingStory: React.FC<ITrackingStoryProps> = ({
  onClick,
  sidebarHandler,
  isSideBarOpen,
}: ITrackingStoryProps) => {
  const dispatch = useAppDispatch();

  const story = useAppSelector(billOfLadingDataSelector);

  return (
    <Drawer anchor="right" open={isSideBarOpen} variant="temporary">
      <Styled.MyCardContent>
        <Styled.ActionsWrapper>
          <IconButton onClick={() => sidebarHandler()} aria-label="hide">
            <ArrowForwardIosIcon />
          </IconButton>
          <Button
            onClick={() => dispatch(clearTBillOfLadingStory())}
            type="submit"
            variant="outlined"
          >
            Очистити iсторію ТТН
          </Button>
        </Styled.ActionsWrapper>

        <Typography variant="h5" component="p" gutterBottom>
          Історія:
        </Typography>
        {story.length > 0 && (
          <Typography color={"darkgray"} component="p" gutterBottom>
            * натисніть на ТТН, щоб отримати інформацію
          </Typography>
        )}
        {story.map((billOfLading: string) => (
          <Button
            key={nanoid()}
            onClick={() => {
              onClick(billOfLading);
            }}
          >
            <Typography variant="h6" component={"p"}>
              ТТН : {billOfLading}
            </Typography>
          </Button>
        ))}
        <Divider />
      </Styled.MyCardContent>
    </Drawer>
  );
};

export default TrackingStory;
