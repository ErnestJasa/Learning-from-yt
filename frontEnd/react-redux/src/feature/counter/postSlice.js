import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const array = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },  
];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    increment: (state) => {
      state.value.push(...array);
    },
    decrement: (state) => {
      state.value.pop(...array);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = postSlice.actions;

export default postSlice.reducer;
