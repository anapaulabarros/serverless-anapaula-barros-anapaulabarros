import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { type Order } from '../../models/Order'
import { type IDatabase } from '../interfaces/IDatabase'

export class Database implements IDatabase {
  private readonly s3Client: S3Client

  constructor () {
    this.s3Client = new S3Client({})
  }

  async getOrders (): Promise<Order[]> {
    const command = new GetObjectCommand({
      Bucket: 'serverless-backend-test-dev-orders',
      Key: 'orders.json'
    })

    const response = await this.s3Client.send(command)
    const orders = await response.Body?.transformToString() ?? '[]'
    return JSON.parse(orders) as Order[]
  }
}
