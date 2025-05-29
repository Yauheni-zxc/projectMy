import { createSlice } from "@reduxjs/toolkit";

export const Menu = createSlice(
    {
        name: "menu",
        initialState: {
            isMenu:false ,
        },
        reducers: {
            toggleMenu: (state) => {
                state.isMenu = !state.isMenu
        },
       
       
    }
}
)
export const {toggleMenu} = Menu.actions

export default Menu.reducer;