
# Simply wave
A simple package in vanilla JS to make text wave as you want

## Installation

Install with npm

```bash
  npm install my-project
  cd my-project
```
    
## Usage/Examples

```html
<h2 id="wave">This a demo<h2>
```

```javascript
import { wave } from './simplywave'

const waveOptions = {
    target: "wave1",
    animationDelay: 0,
    letterDelay: 20,
    easing: "linear"
}

wave(waveOptions)
```

## Options 

- `target` id of the text in html
- `transform` in em / rem / % or px
- `duration` of the animation (for each letters)
- `animationDelay` time before animation start
- `letterDelay` time before each letter's animation start
- `easing` ease-in / ease-out / ease-in-out / linear / cubic-bezier
- `iterations` number / Infinity
- `fill` both / forwards / backwards / none
- `direction` reverse / alternate / alternate-reverse / normal
- `opacity` true or false
- `overflow` true or false

