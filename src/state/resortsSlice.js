import {createSlice} from '@reduxjs/toolkit';

const resortsSlice = createSlice({
  name: 'resorts',
  initialState: {
    resorts: [],
    currentResort: {},
    currentCountry: 'All',
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
    setCurrentCountry: (state, action) => {
      state.currentCountry = action.payload;
    },
  },
});

export const {setResorts, setCurrentResort, setCurrentCountry} =
  resortsSlice.actions;
export default resortsSlice.reducer;
