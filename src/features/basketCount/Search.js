import { createSlice } from "@reduxjs/toolkit";

export const Search = createSlice(
    {
        name: "search",
        initialState: {
            value:'' ,
        },
        reducers: {
            setValue: (state,action) => {
                state.value = action.payload
        },
       
       
    }
}
)
export const {setValue} = Search.actions

export default Search.reducer;