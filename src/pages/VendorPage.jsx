import { Link, useParams } from 'react-router'
import { useVendor } from '../hooks/useVendor.js'
import { useRecentlyViewed } from '../hooks/useRecentlyViewed.js'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
  const { id } = useParams()
  const { vendor, menu, loading, error } = useVendor(id)
  const { addViewed } = useRecentlyViewed()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />

  if (!vendor) {
    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>
        <Link to="/">← All vendors</Link>
      </section>
    )
  }

  // Each item must know its vendor name, so the cart and orders can use it.
  const items = menu.map((item) => ({ ...item, vendorName: vendor.name }))

  return (
    <section>
      <p><Link to="/">← All vendors</Link></p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">{vendor.location} · {vendor.openHours}</p>
      <MenuList
        items={items}
        onView={(item) => addViewed(item, vendor)}
      />
    </section>
  )
}

export default VendorPage