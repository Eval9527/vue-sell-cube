import { get } from './helpers'

const getSeller = get('/api/seller.json')
const getGoods = get('/api/goods.json')
const getRatings = get('/api/ratings.json')

// 导出函数
export {
  getSeller,
  getGoods,
  getRatings
}
