import { createAsyncThunk } from "@reduxjs/toolkit";
import recruitmentApi from "../../apis/recruitment.api";

export const getRecruitments = createAsyncThunk(
  "Recruitment/getRecruitments",
  async (data, thunkAPI) => {
    try {
      const res = await recruitmentApi.getRecruitments(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
