import { offers } from './offers'

describe('offers', () => {
  scenario('returns all offers', async (scenario) => {
    const result = await offers()

    expect(result.length).toEqual(Object.keys(scenario.offer).length)
  })
})
