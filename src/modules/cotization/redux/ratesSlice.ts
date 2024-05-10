import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:''
}

export const ratesSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getRates: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {getRates} = ratesSlice.actions;
export default ratesSlice.reducer;