import ServiceHttp from './http'
import demoData from '../../data/demo_data'
class Customer extends ServiceHttp {
  getList () {
    return new Promise((resolve, reject) => {
      resolve(demoData.customer)
    })
  }
}
export default new Customer()
