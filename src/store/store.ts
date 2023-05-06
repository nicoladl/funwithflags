import { configureStore } from '@reduxjs/toolkit'
import UiReducer from "@/store/UiSlice/UiSlice";

export default configureStore({
    reducer: {
        ui: UiReducer
    }
})