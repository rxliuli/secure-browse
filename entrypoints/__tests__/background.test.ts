import { expect, it } from 'vitest'
import { matchesPattern } from '../utils/matchesPattern'
import { config } from '../background'

it('matchesPattern', () => {
  config.financialSites.forEach((it) => {
    it.examples?.forEach((url) => {
      expect(matchesPattern(url, [it.match])).true
    })
  })
})
