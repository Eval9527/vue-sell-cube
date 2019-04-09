import { get } from './helpers'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
const getRatings = get('/api/ratings')

// 导出函数
export {
  getSeller,
  getGoods,
  getRatings
}
