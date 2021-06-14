import {createSlice} from '@reduxjs/toolkit'

const loggedUserSlice =  createSlice({
    name: 'logged-user',
    initialState: { },
    reducers: {
        logIn(state, payload) {

        }
    }
});

export const {logIn} = loggedUserSlice;
export default loggedUserSlice.reducer;
