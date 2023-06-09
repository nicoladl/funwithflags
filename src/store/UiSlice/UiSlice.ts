import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface UiState {
    guessedCountryCode: string
    inputCountryCode: string
    randomCountry: {
        code: string
        name: string
    }
    isWinning: boolean
}

export const initialState: UiState = {
    guessedCountryCode: '',
    inputCountryCode: '',
    randomCountry: {
        code: '',
        name: '',
    },
    isWinning: false,
}
export const UiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        guessedCountry: (state, action: PayloadAction<string>) => {
            state.guessedCountryCode = action.payload
        },
        randomCountryCode: (state, action: PayloadAction<{
            code: string
            name: string
        }>) => {
            state.randomCountry = action.payload
        },
        inputCountryCode: (state, action: PayloadAction<string>) => {
            state.inputCountryCode = action.payload
        },
        isWinning: (state) => {
            state.isWinning = true
        },
        isNotWinning: (state) => {
            state.isWinning = false
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