import { createSlice } from '@reduxjs/toolkit'

export const UiSlice = createSlice({
    name: 'ui',
    initialState: {
        guessedCountryCode: '',
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
        }
    }
})

// Action creators are generated for each case reducer function
export const { guessedCountry, randomCountryCode } = UiSlice.actions

export default UiSlice.reducer