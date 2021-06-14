import {createSlice} from '@reduxjs/toolkit'

let dados = JSON.parse(window.localStorage.getItem("loggedUser"))
if (dados === null ) {
    dados = {}
}

const loggedUserSlice =  createSlice({
    name: 'logged-user',
    initialState: dados,
    reducers: {
           logIn(state, {payload}) {
            const data = {jwt: payload};
            window.localStorage.setItem("loggedUser", JSON.stringify(data))
            return data;
        }
    }
});

export const {logIn} = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
