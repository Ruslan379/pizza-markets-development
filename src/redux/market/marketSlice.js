import { createSlice } from '@reduxjs/toolkit';
import {
    getAllMarkets,
    togleIsOneShop,
} from './marketOperations';




const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};


const marketsSlice = createSlice({
    name: 'markets',
    initialState: {
        allMarkets: [],
        isOneShop: false,
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [getAllMarkets.pending]: handlePending,

        [getAllMarkets.rejected]: handleRejected,

        [getAllMarkets.fulfilled](state, { payload }) {
            // console.log("getAllMarkets.fulfilled --> payload:", payload); //!
            state.allMarkets = payload;
            state.isLoading = false;
            state.error = null;
        },

        [togleIsOneShop.fulfilled](state, { payload }) {
            state.isOneShop = !state.isOneShop;
            state.error = null;
        },
    },
});

export const marketsPizzasReduser = marketsSlice.reducer;
