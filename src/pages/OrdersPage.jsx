import { useMyOrders } from '../hooks/useMyOrders.js'
import OrderStatus from '../components/OrderStatus.jsx'
import OrderActions from '../components/OrderActions.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function OrdersPage() {
  const { orders, loading, error } = useMyOrders()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />
  if (orders.length === 0) {
    return <p className="muted">No orders yet.</p>
  }

  return (
    <section>
      <h2 className="section-title">My Orders</h2>
      {orders.map((order) => (
        <article key={order.id} className="card">
          <p className="cart-name">{order.vendorName} · pickup {order.pickupTime}</p>
          <p className="muted">
            For {order.studentName} ({order.mahallah})
          </p>
          <ul>
            {order.items.map((item) => (
              <li key={item.itemId}>{item.qty} × {item.name}</li>
            ))}
          </ul>
          <p className="muted">
            Placed {order.createdAt ? order.createdAt.toDate().toLocaleString('en-MY') : 'just now'}
          </p>
          <p>Total: RM {order.total.toFixed(2)}</p>
          <OrderStatus status={order.status} />
          {order.status === 'Received' && <OrderActions order={order} />}
        </article>
      ))}
    </section>
  )
}

export default OrdersPage