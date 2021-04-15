# vue3-clipboard

A simple vuejs 3 binding for clipboard.js

## Install

`npm install --save vue3.0-clipboard` without npm

## Usage

For vue-cli user:

```javascript
import { createApp } from 'vue'
import vue3Clipboard from 'vue3.0-clipboard'

const app = createApp({})

app.use(vue3Clipboard)
```

## Sample

```html
<template>
  <button v-clipboard="clipboardInfo">复制</button>
</template>
<script>
export default {
  setup() {
    const success = () => {
      console.log('复制成功')
    }

    const error = () => {
      console.log('复制失败')
    }

    return {
      clipboardInfo: {
        msg: '这是要复制的内容',
        success,
        error,
      },
    }
  },
}
</script>
```
