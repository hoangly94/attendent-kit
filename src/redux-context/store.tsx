import { Dispatch, createContext, useContext, useReducer } from 'react'


type Reducer<T> = { [key: string]: (state: T, payload: any) => T }

interface CreateStoreProps<T, R extends Reducer<T>> {
  name: string
  initialState: T
  reducer: R
}

interface StoreProviderProps {
  children: React.ReactNode
}

export function useStore<T>(context: React.Context<T>) {
  return useContext(context)
}

export function createStore<T, R extends Reducer<T>>({
  name,
  initialState,
  reducer,
}: CreateStoreProps<T, R>) {

  // function reducer(state: any, action: any) {
  //   console.log('+++++++++++++++++++')
  //   console.log(action)
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return { count: state.count + 1 };
  //     case "DECREMENT":
  //       return { count: state.count - 1 };
  //     case "INCREMENT_BY":
  //       return { count: state.count + action.payload };
  //     default:
  //       return state;
  //   }
  // }

  // const [state, dispatch] = useReducer((state: T, action: (state: T) => T) => {
  //   console.log('+++++++++++++++++++')
  //   console.log(action)
  //   return action(state)
  // }, initialState)

  // const newReducer = Object.fromEntries(Object.entries(reducer).map(
  //   ([k, v]) =>
  //     [k, (payload: Parameters<typeof v>[1]) => dispatch('asdasdasa' as any)]
  // )) as { [key in keyof R]: (payload: Parameters<R[key]>[1]) => (state: T) => T }

  // const newReducer = Object.fromEntries(Object.entries(reducer).map(
  //   ([k, v]) =>
  //     [k, (payload: Parameters<typeof v>[1]) => dispatch((state: T) => v(state, payload))]
  // )) as { [key in keyof R]: (payload: Parameters<R[key]>[1]) => (state: T) => T }

  const contextValue = {
    state: {} as any,
    dispatch: {} as any
    // dispatch: newReducer as { [key in keyof R]: (payload: Parameters<R[key]>[1]) => void },
  }

  //@typescript-eslint/no-empty-function
  const Context = createContext(contextValue)

  const Provider = ({
    children,
  }: StoreProviderProps) => {
    // const [state, dispatch] = useReducer(reducer, { count: 0, path: '/login' });


    const [state, dispatch] = useReducer((state: T, action: (state: T) => T) => action(state), initialState)

    const newReducer = Object.fromEntries(Object.entries(reducer).map(
      ([k, v]) =>
        [k, (payload: Parameters<typeof v>[1]) => dispatch((state: T) => v(state, payload))]
    )) as { [key in keyof R]: (payload: Parameters<R[key]>[1]) => (state: T) => T }
    const contextValue = {
      state,
      dispatch: newReducer as { [key in keyof R]: (payload: Parameters<R[key]>[1]) => void },
    }

    return (
      <Context.Provider
        value={contextValue}
      >
        {children}
      </Context.Provider>
    )
  }

  return {
    Context,
    Provider,
  }
}


// //Redux classic
// const dispatch = useDispatch()
// dispatch({ type: 'PHUC_DU', payload: 'kimochi' })

// //Redux toolkit
// const dispatch = useDispatch()
// dispatch(phucDu('kimochi'))

// //Holy Redux
// const store = useStore(PhucStore)
// store.dispatch.phucDu('kimochi')