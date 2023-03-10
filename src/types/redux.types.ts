export type ObjectData = [{ [key: string]: any }];

export interface IDataFromApi {
  success: boolean;
  data: ObjectData | [];
  errors: Array<string> | [];
  translatedErrors: [];
  warnings: ObjectData | Array<string>;
  info: [];
  messageCodes: [];
  errorCodes: [];
  warningCodes: [];
  infoCodes: [];
}

export interface ITrackingSliceState {
  data: IDataFromApi;
  loading: boolean;
  error: null | string;
}

export interface IBillOfLadingState {
  billOfLadingStory: Array<string>;
}

export interface IDepartmentsSliceState {
  departmentsData: IDataFromApi;
  citiesData: IDataFromApi;
  loading: boolean;
  error: null | string;
}

export interface IState {
  trackingState: ITrackingSliceState;
  billOfLadingState: IBillOfLadingState;
  departmentsState: IDepartmentsSliceState;
}
