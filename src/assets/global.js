import cookie from './cookie'
import axios from 'axios'
import ajaxUrl from './ajaxUrl'

const global = {
  cookie,
  ajax(pathName = '', data = {}, callBack = console.log) {
    axios({
      baseURL: ajaxUrl.origin,
      url: ajaxUrl.reqPage[pathName],
      method: 'post',
      data
    }).then(res => {
      callBack(res.data)
    }).catch(err => {
      console.log(err)
      callBack({msg: '未知错误！'})
    })
  }
}

export default (Vue, option) => {
  Vue.prototype.$g = global
}
