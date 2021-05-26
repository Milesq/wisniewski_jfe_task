import { digitSpan, getStore } from '../src/store'

describe('game', () => {
  let store: ReturnType<typeof getStore>

  beforeEach(() => {
    store = getStore()
  })

  it('correct sequence increace level', async () => {
    await store.dispatch(digitSpan.createSequence())
    const initialState = store.getState().digitSpan

    initialState.currentSequence.map(nextAnswer => {
      store.dispatch(digitSpan.reply(nextAnswer))
    })

    const endState = store.getState().digitSpan

    expect(endState.currentLevel).toBe(initialState.currentLevel + 1)
    expect(endState.currentSequence).toEqual([])
  })

  it('correct sequence decrease level', async () => {
    await store.dispatch(digitSpan.createSequence())

    const initialState = store.getState().digitSpan

    const badAnswer = initialState.currentSequence[0] + 1
    store.dispatch(digitSpan.reply(badAnswer))

    const endState = store.getState().digitSpan

    expect(endState.currentLevel).toBe(initialState.currentLevel - 1)
    expect(endState.currentSequence).toEqual([])
  })
})
