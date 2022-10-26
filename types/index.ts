export type useLastPathOptions = {
  matcher?: RegExp | string | Record<string, RegExp | string>
  defaultHome?: string
  allowDots?: boolean
  allowBrackets?: boolean
}

export type useLastPathProps = (options?: useLastPathOptions) => {
  lastPath: string
  isDynamic: boolean
  isLastPath: (path: string) => boolean
  query: Record<string, string>
  isMatch: boolean
}

export type SanitizeOptions = [boolean | undefined, boolean | undefined]

const asElementTypes = <T>(regex: { [K in keyof T]: boolean }) => regex
