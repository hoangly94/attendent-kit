import { createStore } from '../redux-context'

interface State {
  path: string
}

const initialState: State = {
  path: '',
}

export const {
  Context: RouterStore,
  Provider: RouterProdiver,
} = createStore({
  name: 'routing',
  initialState,
  reducer: {
    navigate(state, payload: string) {
      console.log('---------navigate---------')
      state.path = payload
      return { ...state }
    },
  }
})


interface Router {
  path: string
  element: JSX.Element
}
interface RoutingConsumerProps {
  routes: Router[]
}
export const RouterConsumer = ({
  routes,
}: RoutingConsumerProps) => {
  return (
    <RouterStore.Consumer>
      {({ state }) => {
        console.log(state.path)
        for (const route of routes) {
          if (route.path === state.path)
            return route.element
        }
        return <></>
      }}
    </RouterStore.Consumer>
  )
}

