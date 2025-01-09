import { type IOrderRepository } from '../interfaces/IOrderRepository'
import { type Order } from '../../models/Order'
import type { IDatabase } from '../../db/interfaces/IDatabase'

export class OrderRepository implements IOrderRepository {
  private readonly database: IDatabase

  constructor (database: IDatabase) {
    this.database = database
  }

  async getOrdersById (id: string, userId: string): Promise<Order | null> {
    const orders = await this.database.getOrders()
    return orders.find(order => order.userId === userId && order.orderId === id) ?? null
  }

  async getOrdersByUserId (userId: string): Promise<Order[]> {
    const orders = await this.database.getOrders()
    return orders.filter(order => order.userId === userId)
  }
}
