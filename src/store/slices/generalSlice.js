import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "general",
  initialState: {
    allPages: localStorage.getItem("rootTheme") || "dark", // theme in all other pages
    profilePage: "dark", // theme in profile page
    currentRoute: "/home" // initial route is set to "home" page
  },
  reducers: {
    changeMode: (state) => {
      if (state.allPages === "dark") {
        state.allPages = "light";
        state.profilePage = "dark";
      } else if (state.allPages === "light") {
        state.allPages = "dark";
        state.profilePage = "light";
      }
      localStorage.setItem("rootTheme", state.allPages);
    },
    changeRoute: (state, path) => {
      state.currentRoute = path.payload;
    },
  },
});

export const { changeMode, changeRoute } = generalSlice.actions;

export default generalSlice.reducer;
