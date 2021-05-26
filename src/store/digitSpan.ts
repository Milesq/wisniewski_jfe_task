import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { random } from '../utils'

import { RootState } from '.'

export interface DigitSpanState {
  currentLevel: number
  score: number
  currentSequence: number[]
  idElementToGuess: number
  life: number
}

const initialState: DigitSpanState = {
  currentLevel: 3,
  score: 0,
  currentSequence: [],
  idElementToGuess: 0,
  life: 3,
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
    reset(state) {
      state.life = initialState.life
      state.score = initialState.score
      state.currentLevel = initialState.currentLevel
    },
    reply(state, { payload }: PayloadAction<number>) {
      const currentElement = state.currentSequence[state.idElementToGuess]

      // loss
      if (currentElement !== payload) {
        if (state.currentLevel > initialState.currentLevel) {
          state.currentLevel--
        }
        state.currentSequence = []
        state.idElementToGuess = 0

        state.life--
        return
      }

      // win
      const lastElementID = state.currentSequence.length - 1
      if (state.idElementToGuess === lastElementID) {
        state.currentSequence = []
        state.idElementToGuess = 0
        state.score += state.currentLevel
        state.currentLevel++
        return
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
  actions: { reply, reset },
  reducer,
} = slice
