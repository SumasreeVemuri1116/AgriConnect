import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [language, setLanguage] = useState('English')
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false)
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false)
  const [showShopByDropdown, setShowShopByDropdown] = useState(false)
  const navigate = useNavigate()
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  const categories = [
    { name: 'Offers', path: '/categories?type=Offers' },
    { name: 'Insecticides', path: '/categories?type=Insecticides' },
    { name: 'Nutrients', path: '/categories?type=Nutrients' },
    { name: 'Fungicides', path: '/categories?type=Fungicides' },
    { name: 'Vegetable & Fruit Seeds', path: '/categories?type=Vegetable' },
    { name: 'Herbicides', path: '/categories?type=Herbicides' },
    { name: 'Growth Promoters', path: '/categories?type=Growth' },
    { name: 'Farm Machinery', path: '/categories?type=Machinery' },
    { name: 'Organic Farming', path: '/categories?type=Organic' },
    { name: 'Animal Husbandry', path: '/categories?type=Animal' },
  ]

  const shopByOptions = [
    { name: 'Plant Growth', path: '/shop-by/growth' },
    { name: 'Root Growth', path: '/shop-by/root' },
    { name: 'Color and Size', path: '/shop-by/color-size' },
    { name: 'Flowers and Fruits', path: '/shop-by/flowers' },
    { name: 'Nutrient Deficiencies', path: '/shop-by/deficiencies' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    const trimmed = searchQuery.trim()
    if (trimmed) {
      navigate(`/search?query=${encodeURIComponent(trimmed)}`)
      setSearchQuery('')
      return
    }
    navigate('/search')
  }

  const handleLanguageSelect = () => {
    navigate('/language')
  }

  return (
    <header className="navbar-container">
      {/* Top Navigation Bar */}
      <div className="nav-top">
        <Link className="brand" to="/">
          <span className="brand-mark" />
          <div className="brand-text">
            <span>AGRICONNECT</span>
            <em>Farm Market</em>
          </div>
        </Link>

        {/* Search Bar */}
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>

        {/* Right Side Actions */}
        <div className="nav-actions-top">
          {/* Language Selector */}
          <div
            className="language-selector"
            role="button"
            tabIndex={0}
            onClick={handleLanguageSelect}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleLanguageSelect()
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{language}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
          </div>

          {/* Track Order */}
          <Link to="/track-order" className="nav-icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13" />
              <path d="M16 8V3H2v13h14V8h7v8h-7" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span>Track Order</span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="nav-icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>Wishlist</span>
          </Link>

          {/* Login */}
          <Link to="/sign-in" className="nav-icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Login</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="nav-icon-link">
            <div style={{ position: 'relative' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartItemCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </div>
            <span>Cart</span>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <nav className="nav-bottom">
        <div className="nav-menu">
          {/* Categories Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowCategoriesDropdown(true)}
            onMouseLeave={() => setShowCategoriesDropdown(false)}
            onClick={() => (showCategoriesDropdown ? setShowCategoriesDropdown(false) : setShowCategoriesDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowCategoriesDropdown(!showCategoriesDropdown)
              }
            }}
          >
            <span>CATEGORIES</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showCategoriesDropdown && (
              <div className="mega-menu categories-menu">
                <div className="mega-menu-grid">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      className="mega-menu-item"
                      onClick={() => setShowCategoriesDropdown(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Shop By Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowShopByDropdown(true)}
            onMouseLeave={() => setShowShopByDropdown(false)}
            onClick={() => (showShopByDropdown ? setShowShopByDropdown(false) : setShowShopByDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowShopByDropdown(!showShopByDropdown)
              }
            }}
          >
            <span>SHOP BY</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showShopByDropdown && (
              <div className="mega-menu shop-by-menu">
                <div className="mega-menu-grid">
                  {shopByOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="mega-menu-item"
                      onClick={() => setShowShopByDropdown(false)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other Navigation Items */}
          <Link to="/categories?type=Seeds" className="nav-menu-item">SEEDS</Link>
          <Link to="/crop-protection" className="nav-menu-item">CROP PROTECTION</Link>
          <Link to="/crop-nutrition" className="nav-menu-item">CROP NUTRITION</Link>
          <Link to="/equipments" className="nav-menu-item">EQUIPMENTS</Link>
          
          {/* Brands Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowBrandsDropdown(true)}
            onMouseLeave={() => setShowBrandsDropdown(false)}
            onClick={() => navigate('/brands')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                navigate('/brands')
              }
            }}
          >
            <span>BRANDS</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
          </div>
          
          <Link to="/advisory" className="nav-menu-item">ADVISORY</Link>
          <Link to="/vedika" className="nav-menu-item">VEDIKA</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
