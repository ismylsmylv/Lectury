import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
  hasSideBarCollapsed: boolean;
}

const initialState: IAuthState = {
  hasSideBarCollapsed: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    collapseSidebar: (state) => {
      state.hasSideBarCollapsed = !state.hasSideBarCollapsed;
    }
  }
});

export const { collapseSidebar } = authSlice.actions;
export const authReducer = authSlice.reducer;
