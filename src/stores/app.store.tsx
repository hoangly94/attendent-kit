import { Dispatch, createContext, useReducer } from 'react'
import { createStore } from '../redux-context'

interface State {
  path: string
}

const initialState: State = {
  path: '/login',
}

export const {
  Context: AppStore,
  Provider: AppProdiver,
} = createStore({
  name: 'routing',
  initialState,
  reducer: {
    navigate(state, payload: string) {
      return state
    },
    customFunctionWithType(state, payload: number) {
      return state
    },
  }
})

