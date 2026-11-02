import { Link, useParams } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import { useRecentlyViewed } from '../hooks/useRecentlyViewed.js'   // NEW
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
  const { id } = useParams()
  const { vendors, loading, error, reload } = useVendors()
  const { addViewed } = useRecentlyViewed()                          // NEW

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((v) => v.id === id)

  if (!vendor) {
    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>
        <Link to="/">← All vendors</Link>
      </section>
    )
  }

  return (
    <section>
      <p><Link to="/">← All vendors</Link></p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">{vendor.location} · {vendor.openHours}</p>
      <MenuList
        items={vendor.menu}
        onView={(item) =>addViewed(item, vendor) }    
      />
    </section>
  )
}

export default VendorPage