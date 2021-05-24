import { configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
} from 'react-redux'

import * as digitSpan from './digitSpan'

export const getStore = () =>
  configureStore({
    reducer: {
      digitSpan: digitSpan.reducer,
    },
  })

type AppStore = ReturnType<typeof getStore>

export type RootState = ReturnType<AppStore['getState']>

export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector

export { digitSpan }
export default getStore()
