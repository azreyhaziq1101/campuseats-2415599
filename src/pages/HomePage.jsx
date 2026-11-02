import { Link } from 'react-router'                                   // NEW
import { useVendors } from '../hooks/useVendors.js'
import { useRecentlyViewed } from '../hooks/useRecentlyViewed.js'     // NEW
import VendorCard from '../components/VendorCard.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function HomePage() {
  const { vendors, loading, error, reload } = useVendors()
  const { recent, clearRecent } = useRecentlyViewed()                 // NEW: before the early returns

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  return (
    <section>
      {/* NEW: Recently viewed */}
      {recent.length > 0 && (
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 className="section-title">Recently viewed</h2>
          <ul>
            {recent.map((r) => (
              <li key={r.id}>
                <Link to={`/vendor/${r.vendorId}`}>{r.name}</Link>
                <span className="muted"> · {r.vendorName} · RM {r.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="btn" onClick={clearRecent}>Clear</button>
        </div>
      )}

      <h2 className="section-title">Choose a vendor</h2>
      <div className="vendor-grid">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  )
}

export default HomePage