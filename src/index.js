import registerServiceWorker from './registerServiceWorker'
import { App } from 'rluy'
import './app.scss'

App.router(require('./router'))

App.onError(e => {
    console.log('发生错误', e)
})

App.run(document.getElementById('root'))

registerServiceWorker()
