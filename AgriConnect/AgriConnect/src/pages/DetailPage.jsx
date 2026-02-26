import { Link, useNavigate, useParams } from 'react-router-dom'
import { bundles, categories, clearanceItems, stories } from '../data/catalog'
import { useCart } from '../context/CartContext'

const typeMeta = {
  category: {
    title: 'Category',
    description: 'Explore curated inputs and verified suppliers in this category.',
    icon: '🏷️',
  },
  bundle: {
    title: 'Bundle',
    description: 'Bundle details include pricing, availability, and advisor tips.',
    icon: '📦',
  },
  story: {
    title: 'Farmer story',
    description: 'Impact highlights and outcomes from growers in your region.',
    icon: '👨‍🌾',
  },
  clearance: {
    title: 'Clearance offer',
    description: 'Limited stock discounts on tools and spare parts.',
    icon: '🔥',
  },
  advisory: {
    title: 'Advisory booking',
    description: 'Share crop details to receive a tailored plan from experts.',
    icon: '💬',
  },
  support: {
    title: 'Support request',
    description: 'We will route your request to the right specialist.',
    icon: '🆘',
  },
}

function DetailPage() {
  const { type, name } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const decodedName = name ? decodeURIComponent(name) : 'Overview'
  const meta = typeMeta[type] || {
    title: 'Detail',
    description: 'More information will be available soon.',
    icon: 'ℹ️',
  }
  const lookupName = decodedName.toLowerCase()
  const catalogLookup = {
    category: categories.map((item) => ({
      name: item.name,
      description: item.description,
    })),
    bundle: bundles.map((item) => ({
      name: item.name,
      description: item.detail,
      price: item.price,
      deal: item.deal,
    })),
    clearance: clearanceItems.map((item) => ({
      name: item.name,
      description: item.note,
      price: item.price,
      deal: item.discount,
    })),
    story: stories.map((item) => ({
      name: item.name,
      description: item.note,
      outcome: item.outcome,
    })),
  }
  const match = catalogLookup[type]?.find((item) => item.name.toLowerCase() === lookupName)
  const detailDescription = match?.description || 'Detailed content will appear soon.'

  const handleAddToCart = () => {
    if (match && typeof match.price === 'number') {
      addItem({
        name: decodedName,
        type: type === 'bundle' ? 'bundle' : type === 'clearance' ? 'clearance' : 'product',
        price: match.price,
        quantity: 1,
      })
      navigate('/cart')
    }
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
        <span className="page-pill">{decodedName}</span>
      </header>
      <div className="page-card">
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
          <span style={{ fontSize: '2rem' }}>{meta.icon}</span>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 8px 0' }}>{decodedName}</h3>
            <p style={{ margin: 0, color: '#6b6457' }}>{detailDescription}</p>
          </div>
        </div>

        {match?.outcome && (
          <div style={{
            padding: '12px',
            background: 'linear-gradient(135deg, rgba(94, 182, 47, 0.1), rgba(94, 122, 58, 0.1))',
            borderRadius: '8px',
            borderLeft: '4px solid #5eb62f',
            marginTop: '16px',
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#2f3a25', fontWeight: '600' }}>
              ✓ {match.outcome}
            </p>
          </div>
        )}

        {match?.deal && (
          <div style={{ marginTop: '12px' }}>
            <span
              className="page-pill"
              style={{
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                color: 'white',
                border: 'none',
              }}
            >
              {match.deal}
            </span>
          </div>
        )}

        {typeof match?.price === 'number' && (
          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: '#faf8f2',
            borderRadius: '12px',
            border: '2px solid #e5dfd0',
          }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#6b6457' }}>Price</p>
            <p style={{ margin: 0, fontSize: '1.6rem', fontWeight: '700', color: '#2c281d' }}>
              ₹{match.price.toLocaleString('en-IN')}
            </p>
          </div>
        )}

        <div className="page-actions" style={{ marginTop: '24px' }}>
          {(type === 'bundle' || type === 'clearance') ? (
            <button
              className="primary"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          ) : null}
          <Link className="ghost" to="/search">
            Browse related items →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
