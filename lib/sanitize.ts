import { SanitizeOptions } from '../types'
import { regex } from './regex'

export const removeBrackets = (path: string) => {
  return path.replace(regex.removeDynamic, '')
}

export const removeDots = (path: string) => {
  return path.replace(regex.removeDots, '')
}

export const sanitize = (path: string, ...options: boolean[]) => {
  let _path = path
  _path = removeBrackets(_path)
  _path = removeDots(_path)
  if (path !== '/') {
    _path.replace('/', '')
  }

  return _path
}

export const sanitizePath = (
  pathname?: string,
  ...options: SanitizeOptions
) => {
  if (!pathname) return '/'
  const [allowDots, allowBrackets] = options

  if (allowDots) {
    return removeBrackets(pathname)
  }

  if (allowBrackets) {
    return removeDots(pathname)
  }

  return sanitize(pathname)
}
