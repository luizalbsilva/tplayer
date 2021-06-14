import {createSlice} from '@reduxjs/toolkit'

let dados = JSON.parse(window.localStorage.getItem("loggedUser"))
if (dados === null ) {
    dados = {}
}

const loggedUserSlice =  createSlice({
    name: 'logged-user',
    initialState: dados,
    reducers: {
        logIn(state, payload) {
            const data = {jwt: payload};
            window.localStorage.setItem("loggedUser", data)
            return data;
        }
    }
});

export const {logIn} = loggedUserSlice;
export default loggedUserSlice.reducer;
