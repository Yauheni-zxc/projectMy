import { createSlice } from "@reduxjs/toolkit";

export const Theme = createSlice(
    {
        name: "theme",
        initialState: {
            isDarkTheme:false ,
        },
        reducers: {
            toggleTheme: (state) => {
                state.isDarkTheme = !state.isDarkTheme
        },
       
       
    }
}
)
export const {toggleTheme} = Theme.actions

export default Theme.reducer;