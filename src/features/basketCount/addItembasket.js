import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  products:[],
  status: null,
  error: null,
  count: 0,
  totalPrice: 0,
  sortBy: '',
  sortOrder:'asc'
  
  
};
export const fetchItem = createAsyncThunk("item/fetchItem", async function (params,{rejectWithValue}) {
  const {sort,search,setord} = params
  try {
    const res = await fetch(
      `https://6762bb8e46efb3732375be4b.mockapi.io/items/items?sortBy=${sort}&order=${setord}&search=${search}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
     return  data;
   
  } catch (error) {
    return rejectWithValue(error.message);
  }
 
});
export const basketAddSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find(item =>   item.id ===newItem.id);
    
      if (existingItem){
      
        existingItem.quantity += 1;
       

      }
      else{state.items.push({
        id:newItem.id,
        name: newItem.name,
        title: newItem.title,
        price: newItem.price,
        quantity: 1,
        image:newItem.image
      })
     } 
      state.count += 1;
      state.totalPrice += newItem.price;
 
    },
    removeItem:(state,action)=>{
      const id = action.payload
      const existingItem = state.items.find(item=>item.id=== id)
      if(existingItem && existingItem.quantity === 1){
       state.items = state.items.filter(item=>item.id !==id)
        
      }
      else {existingItem.quantity--;
       
       }
       state.quantity--
       state.totalPrice=state.totalPrice -existingItem.price 
       state.count--
    },
    deleteItem:(state,action)=>{
      const id = action.payload
     const existingItem = state.items.find(item=>item.id===id)
     if (existingItem){
       state.items = state.items.filter(item=>item.id !==id)
       state.count -=existingItem.quantity 
       state.totalPrice -= existingItem.price* existingItem.quantity
     }
    },
    clearCart:(state,action)=>{
      state.items = []
      state.count = 0
      state.totalPrice =0
    },
    sortBy: (state, action) => {
      state.sortBy = action.payload;
      
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
  },

   
  },
  extraReducers:(builder)=> {
    builder
    .addCase (fetchItem.pending, (state, action) => {
       state.status = "loading";
     })
     .addCase (fetchItem.fulfilled, (state, action) => {
       state.status = 'succeeded';
      state.products=action.payload
     
     })

     .addCase (fetchItem.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload;
    })
   },
});
export const { addItem, removeItem, clearItem,deleteItem,clearCart,sortBy,setSortOrder } = basketAddSlice.actions;
export default basketAddSlice.reducer;
