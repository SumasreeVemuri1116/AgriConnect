const stories = [
  ['Ravi, Maharashtra', 'Cut input costs by 22% using bundled kits.'],
  ['Anita, Karnataka', 'Improved tomato yield with weekly advisory.'],
  ['Iqbal, Punjab', 'Saved 3 days with doorstep delivery.'],
]

function Stories({ onReadStory }) {
  return (
    <section id="stories" className="section">
      <div className="section-head">
        <h2>Farmer stories</h2>
        <p>Real impact from growers who switched to digital procurement.</p>
      </div>
      <div className="grid stories">
        {stories.map(([name, note]) => (
          <article key={name} className="story-card">
            <div className="story-avatar" />
            <h3>{name}</h3>
            <p>{note}</p>
            <button className="link" onClick={() => onReadStory(name)}>
              Read story
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Stories
