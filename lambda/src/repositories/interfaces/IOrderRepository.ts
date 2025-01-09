import { type Order } from '../../models/Order'

export interface IOrderRepository {
  getOrdersById: (id: string, userId: string) => Promise<Order | null>
  getOrdersByUserId: (userId: string) => Promise<Order[]>
}
