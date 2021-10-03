import {createSlice} from '@reduxjs/toolkit';

const resortsSlice = createSlice({
  name: 'resorts',
  initialState: {resorts: []},
  reducers: {
    setResorts: (state, action) => {
      state.resorts = [...action.payload];
    },
  },
});

export const {setResorts} = resortsSlice.actions;
export default resortsSlice.reducer;
