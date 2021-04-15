/*
 * @Description: vue3.0剪切板插件
 * @Author: wangfengxiang
 * @Date: 2021-04-15 15:27:32
 * @LastEditTime: 2021-04-15 16:19:29
 * @LastEditors: wangfengxiang
 */

/**
 * 复制内容到剪切板
 * @param {*} text 要复制的文本内容
 */
function copyText (text) {
  return new Promise((resolve, reject) => {
    let input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      resolve()
    } else {
      reject('复制失败！')
    }
    document.body.removeChild(input);
  })
}

const vue3Clipboard = {
  install (app) {
    app.directive('clipboard', {
      created (el, binding) {
        el.onclick = () => {
          if (Object.prototype.toString.call(binding.value) !== '[object Object]') throw new Error('param error!')
          let { msg, success, error } = binding.value
          if (!msg) throw new Error('need copy msg!')
          copyText(msg).then(() => success && success()).catch(errMsg => error && error(errMsg))
        }
      }
    })
  }
}

export default vue3Clipboard