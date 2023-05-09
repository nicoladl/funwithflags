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
        winning: false,
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
        },
        isWinning: (state) => {
            state.winning = true
        },
        isNotWinning: (state) => {
            state.winning = false
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    guessedCountry,
    randomCountryCode,
    inputCountryCode,
    isNotWinning,
    isWinning
} = UiSlice.actions

export default UiSlice.reducer