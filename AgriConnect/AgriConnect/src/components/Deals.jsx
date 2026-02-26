const deals = [
  ['Summer paddy bundle', 'Save 18%', 'NPK + bio enhancer pack'],
  ['Vegetable micro kit', 'Save 12%', 'Zinc, boron, calcium trio'],
  ['Cotton defense combo', 'Save 15%', 'Pest shield + spray kit'],
]

function Deals({ onAddBundle, onViewDetails, onShopClearance, onStockStatus }) {
  return (
    <section id="deals" className="section highlight">
      <div className="section-head">
        <h2>Today’s hot deals</h2>
        <p>Limited-time bundles and price drops for fast-moving inputs.</p>
      </div>
      <div className="grid deals">
        {deals.map(([name, deal, detail]) => (
          <article key={name} className="deal-card">
            <div className="deal-top">
              <span>{deal}</span>
              <button className="tag" onClick={onStockStatus}>
                In stock
              </button>
            </div>
            <h3>{name}</h3>
            <p>{detail}</p>
            <div className="deal-cta">
              <button className="primary" onClick={() => onAddBundle(name)}>
                Add bundle
              </button>
              <button className="ghost" onClick={() => onViewDetails(name)}>
                Details
              </button>
            </div>
          </article>
        ))}
        <article className="deal-card wide">
          <h3>Warehouse clearance</h3>
          <p>Tools, sprayers, and spare parts up to 40% off.</p>
          <button className="dark" onClick={onShopClearance}>
            Shop clearance
          </button>
        </article>
      </div>
    </section>
  )
}

export default Deals
