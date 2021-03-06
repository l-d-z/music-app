import jsonp from '../assets/js/jsonp'
import { commonParams, options } from './config'

// import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    _: 1521016521174,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
