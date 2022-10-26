import React from 'react'
import { useRouter } from 'next/router'
import { useLastPathProps } from './types'
import { regex, sanitizePath, makeMatch } from './lib'

export const useLastPath: useLastPathProps = (options) => {
  const { pathname, isReady, query } = useRouter()
  const { matcher, allowBrackets, allowDots, defaultHome } = options || {}
  const [lastPath, setLastPath] = React.useState('')
  const [isDynamic, setIsDynamic] = React.useState(false)
  const [isMatch, setIsMatch] = React.useState(false)

  const isLastPath = (path: string) => {
    return lastPath === path
  }

  React.useEffect(() => {
    if (isReady) {
      if (matcher) {
        const match = makeMatch(pathname, options)
        setIsMatch(!!match)
      }

      const pathLength = pathname.split('/').length
      let lastPath = pathname.split('/')[pathLength - 1]

      if (pathname === '/') {
        lastPath = defaultHome || '/'
      }
      const _isDynamic = !!lastPath.match(regex.isDynamic)
      const sanitizedPath = sanitizePath(lastPath, allowDots, allowBrackets)
      setIsDynamic(_isDynamic)
      setLastPath(sanitizedPath)
      if (_isDynamic) {
        setLastPath(query[sanitizedPath])
      }
    }
  }, [pathname, isReady])

  return { lastPath, isLastPath, isDynamic, query: query, isMatch }
}
