import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import {
  getDepartments,
  getDepartmentsCities,
} from "../operations/departmentsOperations";
import { IDepartmentsSliceState } from "../../types/redux.types";
import { IDataFromApi } from "../../types/redux.types";

const initialState: IDepartmentsSliceState = {
  departmentsData: {
    success: false,
    data: [],
    errors: [],
    translatedErrors: [],
    warnings: [],
    info: [],
    messageCodes: [],
    errorCodes: [],
    warningCodes: [],
    infoCodes: [],
  },

  citiesData: {
    success: false,
    data: [],
    errors: [],
    translatedErrors: [],
    warnings: [],
    info: [],
    messageCodes: [],
    errorCodes: [],
    warningCodes: [],
    infoCodes: [],
  },

  loading: false,
  error: null,
};

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getDepartments.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getDepartments.fulfilled,
      (state, { payload }: PayloadAction<IDataFromApi>) => {
        state.departmentsData = payload;
        state.loading = false;
      }
    );

    builder.addCase(getDepartmentsCities.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getDepartmentsCities.fulfilled,
      (state, { payload }: PayloadAction<IDataFromApi>) => {
        state.citiesData = payload;
        state.loading = false;
      }
    );
    builder.addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export default departmentsSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
