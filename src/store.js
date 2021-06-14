import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from './slicers/logged-user.slicer'

export default configureStore({
    reducer: {
        login: LoginReducer
    }
})

