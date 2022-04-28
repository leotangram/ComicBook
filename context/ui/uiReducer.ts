import { ListModeType, UIState } from './interfaces'

type UIActionType = { type: 'UI - Set ListMode'; payload: ListModeType }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Set ListMode':
      return {
        ...state,
        listMode: action.payload
      }
    default:
      return state
  }
}
