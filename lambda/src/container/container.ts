import { OrderService } from '../services/OrderService'
import { OrderController } from '../controller/OrderController'
import { GetOrderByIdUsecase } from '../usecases/GetOrderByIdUsecase'
import { GetOrdersByUserIdUsecase } from '../usecases/GetOrdersByUserIdUsecase'
import { type IOrderRepository } from '../repositories/interfaces/IOrderRepository'
import { OrderRepository } from '../repositories/implementations/OrderRepository'
import { type IDatabase } from '../db/interfaces/IDatabase'
import { Database } from '../db/implementations/Database'

export class Container {
  private readonly orderService: OrderService
  private readonly orderController: OrderController
  private readonly orderRepository: IOrderRepository
  private readonly database: IDatabase

  constructor () {
    this.database = new Database()
    this.orderRepository = new OrderRepository(this.database)
    this.orderService = new OrderService(this.orderRepository)
    this.orderController = new OrderController(new GetOrderByIdUsecase(this.orderService), new GetOrdersByUserIdUsecase(this.orderService))
  }

  getOrderController (): OrderController {
    return this.orderController
  }
}
