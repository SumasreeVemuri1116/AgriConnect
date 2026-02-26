import { Link, useNavigate } from 'react-router-dom'
import { clearanceItems } from '../data/catalog'
import { useCart } from '../context/CartContext'

// Clearance images from Unsplash
const clearanceImages = {
  'Sprayers': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
  'Field tools': 'https://images.unsplash.com/photo-1564618606176-e9d3b6637e5f?auto=format&fit=crop&w=600&q=80',
  'Spare parts': 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80',
}

function ClearancePage() {
  const navigate = useNavigate()
  const { addItem } = useCart()

  const handleAddClearanceItem = (item) => {
    addItem({
      name: item.name,
      type: 'clearance',
      price: item.price,
      quantity: 1,
    })
    navigate('/cart')
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Clearance Sale</h1>
        <p>Warehouse clearance items with limited stock - Heavy discounts available!</p>
      </header>
      <div className="page-grid">
        {clearanceItems.map((item) => (
          <article key={item.name} className="page-card">
            {clearanceImages[item.name] && (
              <img
                className="page-card-image"
                src={clearanceImages[item.name]}
                alt={item.name}
              />
            )}
            <h3>{item.name}</h3>
            <p>{item.note}</p>
            <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2c281d', marginTop: '8px' }}>
              ₹{item.price.toLocaleString('en-IN')}
            </p>
            <span
              className="page-pill"
              style={{
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                color: 'white',
                marginTop: '0.5em',
                display: 'inline-block',
                border: 'none',
              }}
            >
              {item.discount}
            </span>
            <div className="page-actions">
              <button
                className="primary"
                onClick={() => handleAddClearanceItem(item)}
              >
                Add to cart
              </button>
              <button
                className="ghost"
                onClick={() => navigate(`/detail/clearance/${encodeURIComponent(item.name)}`)}
              >
                View offers
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default ClearancePage
