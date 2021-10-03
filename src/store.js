import {configureStore} from '@reduxjs/toolkit';
import resortsSlice from './state/resortsSlice';

export default configureStore({
  reducer: {
    resorts: resortsSlice,
  },
});
