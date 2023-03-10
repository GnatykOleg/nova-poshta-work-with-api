import { IState } from "../../types/redux.types";
import { ObjectData } from "../../types/redux.types";

export const trackingDataSelector = (state: IState): ObjectData | [] =>
  state.trackingState.data.data;

export const trackingLoadingSelector = (state: IState): boolean =>
  state.trackingState.loading;
