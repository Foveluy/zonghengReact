import registerServiceWorker from './registerServiceWorker'
import { App } from 'rluy'

App.router(require('./router'))

App.onError(e => {
  console.log('发生错误', e)
})

App.run(document.getElementById('root'), true)

registerServiceWorker()
