import registerServiceWorker from './registerServiceWorker'

import { App } from 'rluy'

App.router(require('./router'))

App.onError(e => {
  console.log('发生错误', e)
  //   message.error('客户端功能未实现或者发生错误')
})

App.run(document.getElementById('root'))

registerServiceWorker()
