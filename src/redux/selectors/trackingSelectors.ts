import { IState } from "../../types/types";

export const trackingDataSelector = (state: IState) =>
  state.trackingState.data.data;

export const trackingLoadingSelector = (state: IState) =>
  state.trackingState.loading;
