import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDataFromApi } from "../../types/redux.types";
import { trackingStatusServiceApi } from "../../services/api/trackingStatusServiceApi";
import { toast } from "react-toastify";

export const getTrackingStatus = createAsyncThunk<
  IDataFromApi,
  string,
  { rejectValue: string }
>("tracking", async (billOfLading: string, { rejectWithValue }) => {
  try {
    const { data } = await trackingStatusServiceApi(billOfLading);
    return data;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
