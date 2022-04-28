export type ListModeType = 'list' | 'grid'

export interface UIState {
  listMode: ListModeType
}

export interface UIContextProps extends UIState {
  onChangeListMode: (payload: ListModeType) => void
}
