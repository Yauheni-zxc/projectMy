import { createSlice } from "@reduxjs/toolkit";

export const Likes = createSlice({
  name: "theme",
  initialState: {
    items: [],
    likes: {},
  },
  reducers: {
    toggleProduct: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId.id);

      if (!existingItem) {
        state.items.push({
          id: productId.id,
          name: productId.name,
          title: productId.title,
          price: productId.price,
          image: productId.image,
        });
      }
    

      
    },
    addLike: (state, action) => {
      const productId = action.payload;
      state.likes[productId] = !state.likes[productId];
    },
    removeFavorites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.likes[action.payload] = false ;
     
      

    },
  },
});

export const { toggleProduct, addLike, removeFavorites } = Likes.actions;

export default Likes.reducer;
