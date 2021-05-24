import { createSlice } from '@reduxjs/toolkit'

export interface DigitSpanState {
  currentLevel: number
  score: number
}

const initialState: DigitSpanState = {
  currentLevel: 3,
  score: 0,
}

export const slice = createSlice({
  name: 'digitSpan',
  initialState,
  reducers: {
    acceptAnswer(state) {
      state.score += state.currentLevel
      state.currentLevel++
    },
    dismissAnswer(state) {
      state.currentLevel--
    },
  },
})

export const {
  actions: { acceptAnswer, dismissAnswer },
  reducer,
} = slice
