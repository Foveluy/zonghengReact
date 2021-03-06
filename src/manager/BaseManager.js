import { call } from 'redux-saga/effects'
import { Toast } from 'antd-mobile'

export class BaseManager {
  constructor() {
    this.call = call
    this.domain = process.env.NODE_ENV === 'production' ? 'https://zh.9uhxir.top/node_api/api' : 'http://127.0.0.1:7001/api'
    this.token = localStorage.getItem('jwt_token')
  }

  loginFail(status) {
    if (status === 401) {
      // message.error('登陆失效，请重新登陆')
      localStorage.removeItem('token')
      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    }
  }

  *Get(url) {
    try {
      const res = yield this.call(fetch, this.domain + url, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      })
      this.loginFail(res.status)

      const json = yield res.json()
      return json
    } catch (e) {
      console.log(e)
    }
  }
  *delete(url, body) {
    try {
      const res = yield this.call(fetch, this.domain + url, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token
        }
      })
      this.loginFail(res.status)
      const json = yield res.json()
      return json
    } catch (e) {
      console.log(e)
    }
  }

  *fetch(url, body) {
    const res = yield this.call(fetch, this.domain + url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token ' + this.token
      }
    })

    this.loginFail(res.status)
    const json = yield res.json()
    console.log('request', json)
    if (json.state === 'fail') {
      Toast.fail(json.message, 1.5)
      throw Error('fail')
    }
    return json.data
  }

  *fetchNoHeader(url, body) {
    try {
      const res = yield this.call(fetch, this.domain + url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      this.loginFail(res.status)
      const json = yield res.json()
      return json
    } catch (e) {
      console.log(e)
    }
  }
}
