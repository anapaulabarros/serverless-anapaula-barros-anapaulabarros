import { type Order } from '../models/Order'
import { type OrderService } from '../services/OrderService'

export class GetOrderByIdUsecase {
  constructor (private readonly orderService: OrderService) {}

  async execute (id: string, userId: string): Promise<Order | null> {
    if (id === '' || userId === '') {
      throw new Error('Invalid request')
    }
    return await this.orderService.getOrderById(id, userId)
  }
}
