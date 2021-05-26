import { digitSpan, getStore } from '../src/store'

describe('game', () => {
  it('correct sequence increace level', async () => {
    const store = getStore()
    await store.dispatch(digitSpan.createSequence())
    const { currentLevel: initialLevel } = store.getState().digitSpan

    const {
      digitSpan: { currentSequence },
    } = store.getState()

    currentSequence.map(nextAnswer => {
      store.dispatch(digitSpan.reply(nextAnswer))
    })

    const { currentLevel } = store.getState().digitSpan

    expect(currentLevel).toBe(initialLevel + 1)
  })
})
