import reducer, {
    guessedCountry,
    initialState,
    inputCountryCode,
    isNotWinning,
    isWinning,
    randomCountryCode,
    UiState
} from './UiSlice'

describe('UiState', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
            guessedCountryCode: "",
            inputCountryCode: "",
            randomCountry: {
                code: "",
                name: ""},
            isWinning: false
        })
    })

    it('should update the guessed country', () => {
        expect(reducer(initialState, guessedCountry('IT'))).toEqual({
            ...initialState,
            guessedCountryCode: 'IT'
        })
    })

    it('should update the random country code', () => {
        expect(reducer(initialState, randomCountryCode({
            code: 'IT',
            name: 'Italy'
        }))).toEqual({
            ...initialState,
            randomCountry: {
                code: 'IT',
                name: 'Italy',
            },
        })
    })

    it('should update the input country code', () => {
        expect(reducer(initialState, inputCountryCode('IT'))).toEqual({
            ...initialState,
            inputCountryCode: 'IT'
        })
    })

    it('should update the is isWinning', () => {
        expect(reducer(initialState, isWinning())).toEqual({
            ...initialState,
            isWinning: true
        })
    })

    it('should update the is isWinning in case of not isWinning', () => {
        expect(reducer(initialState, isNotWinning())).toEqual({
            ...initialState,
            isWinning: false
        })
    })
})