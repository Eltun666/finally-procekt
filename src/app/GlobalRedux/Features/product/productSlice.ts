'use client';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Game {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  categories: string[];
  platforms: string[];
  description: string;
  iframe:string
}

export interface CounterState {
  gameData: Game[];
}

const initialState: CounterState = {
  gameData: [],
};

export const getApi = createAsyncThunk<Game[], void>(
  'getApi',
  async () => {
    try {
      const { data } = await axios.get('https://678536e71ec630ca33a7b680.mockapi.io/product');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApi.fulfilled, (state, action: PayloadAction<Game[]>) => {
      state.gameData = action.payload; 
    });
  },
});

export default counterSlice.reducer;
