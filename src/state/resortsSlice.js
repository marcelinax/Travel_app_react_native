import {createSlice} from '@reduxjs/toolkit';

const resortsSlice = createSlice({
  name: 'resorts',
  initialState: {
    resorts: [],
    currentResort: {},
    currentCountry: 'All',
    shoppingBag: [],
    shoppingBagItemsAmount: [],
  },
  reducers: {
    setResorts: (state, action) => {
      state.resorts = [...action.payload];
    },
    setCurrentResort: (state, action) => {
      const {id} = action.payload;
      const resortIndex = state.resorts.map(resort => resort.id).indexOf(id);
      state.currentResort = state.resorts[resortIndex];
    },
    setCurrentCountry: (state, action) => {
      state.currentCountry = action.payload;
    },
    addResortToShoppingBag: (state, action) => {
      const {id} = action.payload;
      const resortId = state.resorts.map(resort => resort.id).indexOf(id);
      if (state.shoppingBag.map(item => item.id).includes(id)) {
        state.shoppingBagItemsAmount[resortId] =
          state.shoppingBagItemsAmount[resortId] + 1;
        state.shoppingBagItemsAmount = [...state.shoppingBagItemsAmount];
      } else {
        state.shoppingBag = [...state.shoppingBag, state.resorts[resortId]];
        state.shoppingBagItemsAmount = [...state.shoppingBagItemsAmount, 1];
      }
    },
    incrementAmountItemInShoppingBag: (state, action) => {
      const {id} = action.payload;
      const resortId = state.resorts.map(resort => resort.id).indexOf(id);
      state.shoppingBagItemsAmount[resortId] =
        state.shoppingBagItemsAmount[resortId] + 1;
      state.shoppingBagItemsAmount = [...state.shoppingBagItemsAmount];
    },
    decrementAmountItemInShoppingBag: (state, action) => {
      const {id} = action.payload;
      const resortId = state.resorts.map(resort => resort.id).indexOf(id);
      if (state.shoppingBagItemsAmount[resortId] < 2) {
        state.shoppingBag.splice(resortId, 1);
        state.shoppingBag = [...state.shoppingBag];
        state.shoppingBagItemsAmount.splice(resortId, 1);
      } else {
        state.shoppingBagItemsAmount[resortId] =
          state.shoppingBagItemsAmount[resortId] - 1;
      }
      state.shoppingBagItemsAmount = [...state.shoppingBagItemsAmount];
    },
  },
});

export const {
  setResorts,
  setCurrentResort,
  setCurrentCountry,
  addResortToShoppingBag,
  decrementAmountItemInShoppingBag,
  incrementAmountItemInShoppingBag,
} = resortsSlice.actions;
export default resortsSlice.reducer;
