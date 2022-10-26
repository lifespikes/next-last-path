import { useLastPathOptions } from '../types'
import { sanitizePath } from './sanitize'

export const makeMatch = (
  pathname: string,
  options: useLastPathOptions | undefined
): boolean => {
  const { matcher, allowBrackets, allowDots, defaultHome } = options || {}

  if (!matcher) return false

  if (matcher instanceof RegExp || typeof matcher === 'string') {
    const _matcher = new RegExp(matcher)
    const sanitized = sanitizePath(pathname, allowDots, allowBrackets)
    if (sanitized === '/' && defaultHome) {
      return _matcher.test(defaultHome)
    }
    return _matcher.test(sanitized)
  }

  if (typeof matcher === 'object') {
    const sanitized = sanitizePath(pathname, allowDots, allowBrackets)
    const keys = Object.keys(matcher)
    const values = keys.map((key) => matcher[key])
    const regexes = values.map((value) => new RegExp(value))
    const matches = regexes.map((regex) => {
      if (sanitized === '/' && defaultHome) {
        return regex.test(defaultHome)
      }
      return regex.test(sanitized)
    })
    return matches.includes(true)
  }

  return false
}
