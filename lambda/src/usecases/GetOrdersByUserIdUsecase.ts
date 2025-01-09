import type { Order } from '../models/Order'
import { type OrderService } from '../services/OrderService'

export class GetOrdersByUserIdUsecase {
  constructor (private readonly orderService: OrderService) {}

  async execute (userId: string): Promise<Order[]> {
    if (userId === '') {
      throw new Error('Invalid request')
    }
    return await this.orderService.getOrdersByUserId(userId)
  }
}
