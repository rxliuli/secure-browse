import { isMatch } from 'picomatch'
import { expect, it } from 'vitest'

function matchesPattern(url: string, patterns: string[]) {
  return isMatch(url, patterns)
}

it('matchesPattern', () => {
  expect(
    matchesPattern('https://www.example.com/test', ['*://*.example.com/*']),
  ).true
  expect(matchesPattern('https://example.com/', ['*://*.example.com/*'])).false
})
