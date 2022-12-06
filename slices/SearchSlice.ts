import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// create a new slice to keep track of the search state
export interface SearchState {
  value: string
}


const initialState: SearchState = {
    value: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearch: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { updateSearch } = searchSlice.actions

export default searchSlice.reducer



