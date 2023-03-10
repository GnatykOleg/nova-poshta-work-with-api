import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDataFromApi } from "../../types/redux.types";
import {
  departmentsServiceApi,
  departmentsCitiesServiceApi,
} from "../../services/api/departmentsServiceApi";
import { toast } from "react-toastify";

export const getDepartmentsCities = createAsyncThunk<
  IDataFromApi,
  undefined,
  { rejectValue: string }
>("cities", async (_, { rejectWithValue }) => {
  try {
    const { data } = await departmentsCitiesServiceApi();
    return data;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});

export const getDepartments = createAsyncThunk<
  IDataFromApi,
  string,
  { rejectValue: string }
>("departments", async (city, { rejectWithValue }) => {
  try {
    const { data } = await departmentsServiceApi(city);
    console.log("data", data);
    return data;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
