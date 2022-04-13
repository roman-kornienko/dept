import { ILoader } from "../../models/ILoader";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ILoader = {
  pending: 0,
  isLoading: false,
};

export const LoaderSlice = createSlice({
  name: "Loader",
  initialState,
  reducers: {
    setIsLoading: (draft) => {
      draft.pending += 1;

      if (draft.pending && !draft.isLoading) {
        draft.isLoading = true;
      }
    },
    setIsLoadingFinish: (draft) => {
      draft.pending -= 1;

      if (!draft.pending && draft.isLoading) {
        draft.isLoading = false;
      }
    },
  },
});

export default LoaderSlice.reducer;
