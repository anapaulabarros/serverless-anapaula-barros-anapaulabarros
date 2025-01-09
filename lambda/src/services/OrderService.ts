import { type IOrderRepository } from '../repositories/interfaces/IOrderRepository'
import { type Order } from '../models/Order'
export class OrderService {
  constructor (private readonly orderRepository: IOrderRepository) {}

  async getOrdersByUserId (userId: string): Promise<Order[]> {
    return await this.orderRepository.getOrdersByUserId(userId)
  }

  async getOrderById (id: string, userId: string): Promise<Order | null> {
    return await this.orderRepository.getOrdersById(id, userId)
  }
}
