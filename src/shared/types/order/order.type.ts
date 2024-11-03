import { OrdersQuery } from '@/__generated__/output'

export type TypeOrder = OrdersQuery['orders']['orders'][0]
export type TypeOrderItem = TypeOrder['items'][0]
