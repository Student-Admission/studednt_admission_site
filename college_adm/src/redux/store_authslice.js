import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './features/alertSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        alert: alertReducer,
    },
});
