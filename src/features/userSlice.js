import {  createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },

  reducers: {
    login: (state, action) =>{
      state.user = action.payload
    },

    logout: state => {
        state.user = null
    },


  },

});

export const { login, logout } = mailSlice.actions;

// selectors

export const selectUser = (state) => state.user.user


export default mailSlice.reducer;
