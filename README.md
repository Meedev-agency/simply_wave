
# Simply wave
A simple package in vanilla JS to make text wave as you want


## Installation

```bash
  npm install simply_wave
```
    
## Usage/Examples

```html
<p id="wave">This text wave<p>
```

```javascript
import { wave } from './simplywave'

const waveOptions = {
    target: "wave",
    animationDelay: 200,
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


## Authors

- [Gabriel Voissiere](https://github.com/Meedev-agency)

