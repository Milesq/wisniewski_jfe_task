import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { random } from '../utils'

import { RootState } from '.'

export interface DigitSpanState {
  currentLevel: number
  score: number
  currentSequence: number[]
}

const initialState: DigitSpanState = {
  currentLevel: 3,
  score: 0,
  currentSequence: [],
}

const createSequence = createAsyncThunk(
  'digitSpan/createSequence',
  (_, { getState }) => {
    const { digitSpan } = getState() as RootState

    const newSequence = new Array(digitSpan.currentLevel)
      .fill(0)
      .map(() => random(0, 10))

    return newSequence
  }
)

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
  extraReducers: builder => {
    builder.addCase(createSequence.fulfilled, (state, { payload }) => {
      state.currentSequence = payload
    })
  },
})

export { createSequence }

export const {
  actions: { acceptAnswer, dismissAnswer },
  reducer,
} = slice
