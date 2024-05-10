import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sale_price: '0.00',
    purchase_price: '0.00'
}

export const ratesSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getRates: (state, action) => {
            state.sale_price = action.payload['sale_price'];
            state.purchase_price = action.payload['purchase_price'];
        }
    }
})

export const {getRates} = ratesSlice.actions;
export default ratesSlice.reducer;