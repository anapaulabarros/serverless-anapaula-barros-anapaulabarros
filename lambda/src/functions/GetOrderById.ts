/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type APIGatewayProxyEvent, type Context, type APIGatewayProxyResult } from 'aws-lambda'
import { Container } from '../container/container'

export const GetOrderById = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  try {
    const container = new Container()
    const orderController = container.getOrderController()
    const result = await orderController.getOrderById(event.pathParameters?.orderId ?? '', event.requestContext.authorizer?.claims?.sub ?? '')
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }
}
