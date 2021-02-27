import { jobs } from './jobs'

describe('jobs', () => {
  scenario('returns all jobs', async (scenario) => {
    const result = await jobs()

    expect(result.length).toEqual(Object.keys(scenario.job).length)
  })
})
