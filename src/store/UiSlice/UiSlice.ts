import { createSlice } from '@reduxjs/toolkit'

export const UiSlice = createSlice({
    name: 'ui',
    initialState: {
        guessedCountryCode: '',
        randomCountryCode: ''
    },
    reducers: {
        guessedCountry: (state, action) => {
            state.guessedCountryCode = action.payload
        },
        randomCountryCode: (state, action) => {
            state.randomCountryCode = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { guessedCountry, randomCountryCode } = UiSlice.actions

export default UiSlice.reducer