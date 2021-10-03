import {createSlice} from '@reduxjs/toolkit';

const resortsSlice = createSlice({
  name: 'resorts',
  initialState: {
    resorts: [],
    currentResort: {},
  },
  reducers: {
    setResorts: (state, action) => {
      state.resorts = [...action.payload];
    },
    setCurrentResort: (state, action) => {
      const {id} = action.payload;
      const resortId = state.resorts.map(resort => resort.id).indexOf(id);
      state.currentResort = state.resorts[resortId];
    },
  },
});

export const {setResorts, setCurrentResort} = resortsSlice.actions;
export default resortsSlice.reducer;
