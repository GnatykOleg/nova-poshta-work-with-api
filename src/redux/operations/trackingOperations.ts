import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { IDataFromApi } from "../../types/redux.types";
import { trackingStatusServiceApi } from "../../services/api/trackingStatusServiceApi";
import { toast } from "react-toastify";

// test ttn 20400308690220;

export const getTrackingStatus = createAsyncThunk<
  IDataFromApi,
  string,
  { rejectValue: string }
>("tracking", async (billOfLading: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<IDataFromApi> =
      await trackingStatusServiceApi(billOfLading);
    return data;
  } catch (error: any) {
    console.log("error", error);
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
