import { IState } from "../../types/redux.types";

export const trackingDataSelector = (state: IState) =>
  state.trackingState.data.data;

export const trackingLoadingSelector = (state: IState) =>
  state.trackingState.loading;
