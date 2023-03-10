import { IState } from "../../types/redux.types";
import { ObjectData } from "../../types/redux.types";

export const departmentsDataSelector = (state: IState): [] | ObjectData =>
  state.departmentsState.departmentsData.data;

export const departmentsCitiesDataSelector = (state: IState): [] | ObjectData =>
  state.departmentsState.citiesData.data;

export const departmentsSelectSelector = (state: IState): boolean =>
  state.departmentsState.loading;
