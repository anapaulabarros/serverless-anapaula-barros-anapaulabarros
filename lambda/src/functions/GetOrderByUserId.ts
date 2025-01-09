import { type APIGatewayProxyEvent, type Context, type APIGatewayProxyResult } from 'aws-lambda'
import { Container } from '../container/container'

export const GetOrderByUserId = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  try {
    const container = new Container()
    const orderController = container.getOrderController()
    const result = await orderController.getOrdersByUserId(event.pathParameters?.userId ?? '')
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
