import { createContextm, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "Test", cost: 400 },
    { id: 132, name: "Test2", cost: 4000 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [stare, dispatch] = useReducer(AppReducer, initalState);

  return (
    <AppContext.AppProvider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.AppProvider>
  );
};
