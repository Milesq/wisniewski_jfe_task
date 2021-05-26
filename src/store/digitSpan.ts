import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { random } from '../utils'

import { RootState } from '.'

export interface DigitSpanState {
  currentLevel: number
  score: number
  currentSequence: number[]
  idElementToGuess: number
}

const initialState: DigitSpanState = {
  currentLevel: 3,
  score: 0,
  currentSequence: [],
  idElementToGuess: 0,
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
    reply(state, { payload }: PayloadAction<number>) {
      const currentElement = state.currentSequence[state.idElementToGuess]

      // // loss
      if (currentElement !== payload) {
        state.currentLevel--
        state.currentSequence = []
        state.idElementToGuess = 0
        return
      }

      // win
      const lastElementID = state.currentSequence.length - 1
      if (state.idElementToGuess === lastElementID) {
        state.currentSequence = []
        state.score += state.currentLevel
        state.currentLevel++
      }

      state.idElementToGuess++
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
  actions: { reply },
  reducer,
} = slice
