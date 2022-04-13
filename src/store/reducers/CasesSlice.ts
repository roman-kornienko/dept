import { createSlice } from "@reduxjs/toolkit";
import { ICase } from "../../models/ICase";

interface CasesState {
  cases: ICase[];
}

const initialState: CasesState = {
  cases: [],
};

export const casesSlice = createSlice({
  name: "cases",
  initialState,
  reducers: {},
});

export default casesSlice.reducer;
