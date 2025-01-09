import { type Order } from '../../models/Order'

export interface IDatabase {
  getOrders: () => Promise<Order[]>
}
