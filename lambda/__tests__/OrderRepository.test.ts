import { OrderRepository } from '../src/repositories/implementations/OrderRepository'
import { type IDatabase } from '../src/db/interfaces/IDatabase'
import { beforeAll, beforeEach, describe, expect, it, jest } from '@jest/globals'
import { Order } from '../src/models/Order'

describe('OrderRepository', () => {
  const database: IDatabase = {
    getOrders: jest.fn().mockImplementation(() => Promise.resolve([])) as () => Promise<Order[]>
  }

  const orderRepository = new OrderRepository(database)

  beforeAll(() => {
    jest.spyOn(console, 'info').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})
    jest.useRealTimers()
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return 200', async () => {
    const result = await orderRepository.getOrdersByUserId('cliente6')
    expect(result).toEqual([])
  })
})