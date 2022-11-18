
![Logo](https://github.com/Meedev-agency/simply_wave/blob/main/logo.png?raw=true)



# Simply wave
![Version](https://img.shields.io/github/package-json/v/Meedev-agency/simply_wave/main?label=Version&style=for-the-badge)

[![License](https://img.shields.io/npm/l/simply_wave?style=for-the-badge)](https://choosealicense.com/licenses/isc/)


## Overview
A simple JavaScript package that allows you to add wave effects to your texts and titles in the easiest way possible

## Installation

```bash
  npm install simply_wave
```
## Demo

![](https://github.com/Meedev-agency/simply_wave/blob/main/simply_wave_demo_gif.gif?raw=true)

[See the demo and test simply wave](https://simplywavedemo.netlify.app/)
    
## Features

- wave effects
- mirror effects ( soon )
## Usage

### **Basic**

#### HTML

```html
<p id="wave">This text wave<p>
```

#### JavaScript
```javascript
import { wave } from "../node_modules/simply_wave/index.js"

const waveOptions = {
    target: "wave",
    animationDelay: 200,
    letterDelay: 20,
    easing: "linear"
}

wave(waveOptions)
```
### **React**
#### HTML
```html
<p id="wave">This text wave<p>
```

#### JavaScript
```javascript
import { wave } from "simply_wave"

const waveOptions = {
    target: "wave",
    animationDelay: 200,
    letterDelay: 20,
    easing: "linear"
}

wave(waveOptions)
```

### **Vue**
#### HTML
```html
<p id="wave">This text wave<p>
```

#### JavaScript
```javascript
import { wave } from "simply_wave"

export default {
  name: "MyComponent",

  mounted() {
    const waveOptions = {
      target: "wave",
      animationDelay: 200,
      letterDelay: 20,
      easing: "linear"
    }

    wave(waveOptions)
  }
}
```
## Options

#### Required

| Parameter | Type     | Description                | Units |
| :-------- | :------- | :------------------------- | :---- |
| `target` | `string` | Your target | HTML id |

#### Optional

| Parameter | Type     | Description                | Value |
| :-------- | :------- | :------------------------- | :---- |
| `transform` | `string` | value of the letter movement | em, rem, px, % |
| `duration` | `number` | animation duration for each letters | ms |
| `animationDelay` | `number` | time before animation start | ms |
| `letterDelay` | `number` | letter delay for each letters | ms |
| `easing` | `string` | like timing function in CSS | ease-in / ease-out / ease-in-out / linear / cubic-bezier |
| `iterations` | `number / string` | number of animation repetitions | string = Infinity / number = 0 - ∞ |
| `fill` | `string` | how the animation finish | both / forwards / backwards / none |
| `direction` | `string` | direction of the animation | reverse / alternate / alternate-reverse / normal |
| `opacity` | `boolean` | if the letter comme with a fade | boolean |
| `overflow` | `boolean` | if the letters appear | boolean |


## Used By

- Neza agency - www.neza.fr

## Author
**Gabriel Voissiere**
