import { isMatch } from 'picomatch'

// Utility function to match URL with patterns
export function matchesPattern(url: string, patterns: string[]) {
  return isMatch(url, patterns, {
    bash: true,
  })
}
