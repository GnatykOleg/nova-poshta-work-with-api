import { IState } from "../../types/types";

export const billOfLadingDataSelector = (state: IState) =>
  state.billOfLadingState.billOfLadingStory;
