import React, { createContext, useContext, useReducer, Dispatch } from 'react';

// Define the state type
type AppState = {
  count: number;
};

// Define the action types
type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

// Define the context type
type AppContextType = {
  state: AppState;
  dispatch: Dispatch<Action>;
};

// Create a context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the reducer function
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'INCREMENT':
      console.log("++++++++++++++");
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

// Create a provider component
export const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(appReducer, { count: 0 });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
