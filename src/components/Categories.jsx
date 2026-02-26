const categories = [
  {
    name: 'Offers',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=300&q=80',
    color: '#b8d4a8'
  },
  {
    name: 'Insecticides',
    image: 'https://images.unsplash.com/photo-1581363641295-5def8f7e1d2b?auto=format&fit=crop&w=300&q=80',
    color: '#a8dcd9'
  },
  {
    name: 'Nutrients',
    image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=300&q=80',
    color: '#f5b8c8'
  },
  {
    name: 'Fungicides',
    image: 'https://images.unsplash.com/photo-1585155770689-f710aef79949?auto=format&fit=crop&w=300&q=80',
    color: '#7dd3f0'
  },
  {
    name: 'Vegetable & Fruit Seeds',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=300&q=80',
    color: '#d4c19c'
  },
  {
    name: 'Herbicides',
    image: 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=300&q=80',
    color: '#ffa940'
  },
  {
    name: 'Growth Promoters',
    image: 'https://images.unsplash.com/photo-1444393907315-08d2f7e131f2?auto=format&fit=crop&w=300&q=80',
    color: '#c5b3d5'
  },
  {
    name: 'Farm Machinery',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&q=80',
    color: '#9db4f5'
  },
  {
    name: 'Flower Seeds',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=300&q=80',
    color: '#f5c4a8'
  },
  {
    name: 'Organic Farming',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80',
    color: '#7dd3f0'
  },
  {
    name: 'Animal Husbandry',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=300&q=80',
    color: '#ffa940'
  },
  {
    name: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&q=80',
    color: '#f5c4c4'
  }
]

function Categories({ onBrowseCategory }) {
  return (
    <section id="categories" className="section">
      <div className="section-head">
        <h2>Categories</h2>
      </div>
      <div className="categories-grid">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="category-item"
            onClick={() => onBrowseCategory(category.name)}
          >
            <div className="category-circle" style={{ background: category.color }}>
              <img src={category.image} alt={category.name} />
            </div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
