import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { categories } from '../data/catalog'

function CategoriesPage() {
  const [params] = useSearchParams()
  const focus = params.get('type')
  const navigate = useNavigate()

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Categories</h1>
        <p>Browse input families curated by agronomists.</p>
        {focus ? <span className="page-pill">Selected: {focus}</span> : null}
      </header>
      <div className="page-grid">
        {categories.map((item) => (
          <article key={item.name} className="page-card">
            {item.image ? (
              <img className="page-card-image" src={item.image} alt={item.name} />
            ) : null}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button
              className="ghost"
              onClick={() => navigate(`/detail/category/${encodeURIComponent(item.name)}`)}
            >
              View items
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}

export default CategoriesPage
