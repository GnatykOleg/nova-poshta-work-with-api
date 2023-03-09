import { IState } from "../../types/redux.types";

export const billOfLadingDataSelector = (state: IState) =>
  state.billOfLadingState.billOfLadingStory;
