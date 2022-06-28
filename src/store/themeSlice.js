import { createSlice } from '@reduxjs/toolkit';

const theme = 'light';
export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {

    toggleTheme(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value = state.value === 'light' ? 'dark' : 'light';
      console.log(state.value);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
