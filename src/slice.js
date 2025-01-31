import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItems: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.selectedItems.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.selectedItems.findIndex(
        (item) => item.title === action.payload.title
      );
      if (index !== -1) {
        state.selectedItems.splice(index, 1);
      }
    },
    resetState:() =>{
      return initialState
    }
  },
});


export const { addItem, removeItem,resetState } = itemsSlice.actions;
export default itemsSlice.reducer;
