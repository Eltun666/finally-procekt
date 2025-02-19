'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Game {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  categories: string[];
  platforms: string[];
  description: string;
  iframe: string;
}

export interface CounterState {
  searchQuery: string;
  SearchData: Game[];
}

const initialState: CounterState = {
  searchQuery: "",
  SearchData: [],
};

export const searchSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    AZ: (state, action: PayloadAction<Game[]>) => {
      state.SearchData = [...action.payload].sort((a, b) => a.name.localeCompare(b.name));
    },
    ZA: (state, action: PayloadAction<Game[]>) => {
      state.SearchData = [...action.payload].sort((a, b) => b.name.localeCompare(a.name));
    },
    Expenisve: (state, action: PayloadAction<Game[]>) => {
      state.SearchData = [...action.payload].sort((a, b) => b.price - a.price);
    },
    Cheap: (state, action: PayloadAction<Game[]>) => {
      state.SearchData = [...action.payload].sort((a, b) => a.price - b.price);
    },
    Default: (state, action: PayloadAction<Game[]>) => {
      state.SearchData = action.payload;
    },
    searchQueryfunc: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    searcfunc: (state, action: PayloadAction<Game[]>) => {
      const query = state.searchQuery.toLowerCase();
      state.SearchData = action.payload.filter((item) => 
        item.name.toLowerCase().includes(query) 
      );
    }
  },
});

export const { AZ, ZA, Expenisve, Cheap, Default, searchQueryfunc, searcfunc } = searchSlice.actions;
export default searchSlice.reducer;
