# Next Last Path Hook 

<sub>AKA: useLastPath</sub> 

🥉 A React Hook containing the last path from a Next.js route + some goodies 🎁

### Features

- ⚡️ Fast
- 🧩 Small (1.1kB gzipped).
- 🥶 Dependency free.
- 🧪 Based on regex. 
- 🧨 Specially useful when working with dynamic routes.

### Install

```bash
npm i next-last-path
```

### Usage

```js
import { useLastPath } from 'uselastpath'

const Component = (props: any) => {
  const { lastPath, isLastPath, isDynamic, query, isMatch } = useLastPath()

  return <div>
    the last path is: {lastPath} {isDynamic && `and it's dynamic`}
  </div>
}

export default Component
```

### Options

| Option        | Type                                                 | Description                                                                                           |
|---------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| matcher       | RegExp \| string \| Record<string, RegExp \| string> | A RegExp, a string, or an Object with RegExp or strings as values. Perform a match on the `lastPath`  |
| allowBrackets | boolean                                              | If route is dynamic, allow brackets on the final result of `lastPath`.                                |
| allowDots     | boolean                                              | If route is dynamic, allow dots on the final result of `lastPath`.                                    |
| defaultHome   | string                                               | By default the homepage is returned as `/`. If you are in `/` instead `defaultHome` will be returned. |
