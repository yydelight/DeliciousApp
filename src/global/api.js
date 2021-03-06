import reqwest from 'reqwest'

const domain = 'https://cnodejs.org/api/v1/topics'
const gank = 'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1'
const showhis = 'http://gank.io/api/history/content/5/1'
const music = 'https://api.imjad.cn/cloudmusic/?type=search'
const music2 = 'http://www.qiufengh.com/key/'
const story = 'http://api.zhuishushenqi.com/'
const try1 = 'http://35.189.165.140:3000/book/fuzzy-search'
// ?type=search&s=zhou

export default {
  getList (data, callback) {
    reqwest({
      url: domain,
      data: data
    })
    .then(val => callback(null, val))
    .catch(e => callback(e))
  },
  getBeauty (data, callback) {
    reqwest({
        url: gank,
        data: data
    })
    .then(val => callback(null, val))
    .catch(e => callback(e))
  },
  getShow (data, callback) {
    reqwest({
        url: showhis,
        data: data
    })
    .then(val => callback(null, val))
    .catch(e => callback(e))
  },
  searchSong ( data, callback) {
    reqwest({
        url: try1,
        data: data
    })
    .then(val => callback(null, val))
    .catch(e => callback(e))
  },
}