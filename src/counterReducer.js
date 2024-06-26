import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
      console.log(action.payload);
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
      console.log(action.payload);
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };

//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };

//     case "RESET":
//       return { ...state, count: 0 };

//     default:
//       return state;
//   }
// };

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
