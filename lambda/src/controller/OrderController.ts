import type { Order } from '../models/Order'
import { type GetOrderByIdUsecase } from '../usecases/GetOrderByIdUsecase'
import { type GetOrdersByUserIdUsecase } from '../usecases/GetOrdersByUserIdUsecase'

export class OrderController {
  constructor (private readonly getOrderByIdUsecase: GetOrderByIdUsecase, private readonly getOrdersByUserIdUsecase: GetOrdersByUserIdUsecase) {}

  async getOrderById (orderId: string, userId: string): Promise<Order | null> {
    return await this.getOrderByIdUsecase.execute(orderId, userId)
  }

  async getOrdersByUserId (userId: string): Promise<Order[]> {
    return await this.getOrdersByUserIdUsecase.execute(userId)
  }
}
