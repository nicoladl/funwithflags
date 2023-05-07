import { createSlice } from '@reduxjs/toolkit'

export const UiSlice = createSlice({
    name: 'ui',
    initialState: {
        guessedCountryCode: '',
        inputCountryCode: '',
        randomCountry: {
            code: '',
            name: '',
        },
    },
    reducers: {
        guessedCountry: (state, action) => {
            state.guessedCountryCode = action.payload
        },
        randomCountryCode: (state, action) => {
            state.randomCountry = action.payload
        },
        inputCountryCode: (state, action) => {
            state.inputCountryCode = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    guessedCountry,
    randomCountryCode,
    inputCountryCode,
} = UiSlice.actions

export default UiSlice.reducer