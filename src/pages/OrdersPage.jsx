import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return <p className="muted">No orders yet.</p>
  }

  return (
    <section>
      <h2 className="section-title">My Orders</h2>
      {orders.map((order) => (
        <article key={order.id} className="card">
          <p>Pickup at {order.pickupTime} for {order.name} ({order.mahallah})</p>
          <ul>
            {order.items.map((line) => (
              <li key={line.item.id}>{line.qty} × {line.item.name}</li>
            ))}
          </ul>
          <p>Total: RM {order.total.toFixed(2)}</p>
        </article>
      ))}
    </section>
  )
}

export default OrdersPage