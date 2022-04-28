import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'
import { ListModeType, UIState } from './interfaces'

const UI_INITIAL_STATE: UIState = {
  listMode: 'grid'
}

interface UIProviderProps {
  children: JSX.Element
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const onChangeListMode = (payload: ListModeType) => {
    dispatch({ type: 'UI - Set ListMode', payload })
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        onChangeListMode
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
