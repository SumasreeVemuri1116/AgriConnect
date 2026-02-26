import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LanguagePage() {
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const navigate = useNavigate()

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  ]

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)
    localStorage.setItem('agriconnect_language', language)
    setTimeout(() => {
      navigate('/')
    }, 500)
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Choose Your Language</h1>
        <p>Select the language you'd like to use across AGRICONNECT.</p>
      </header>
      <div className="page-grid">
        {languages.map((lang) => (
          <div
            key={lang.code}
            role="button"
            tabIndex={0}
            onClick={() => handleLanguageSelect(lang.name)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleLanguageSelect(lang.name)
              }
            }}
            style={{
              cursor: 'pointer',
              padding: '20px',
              borderRadius: '16px',
              border: '2px solid ' + (selectedLanguage === lang.name ? '#5e7a3a' : '#e5dfd0'),
              background: selectedLanguage === lang.name 
                ? 'linear-gradient(135deg, rgba(94, 122, 58, 0.05), rgba(94, 182, 47, 0.05))'
                : '#fffdf8',
              transition: 'all 0.25s ease',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
              {lang.flag}
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#2c281d', margin: 0 }}>
              {lang.name}
            </h3>
            <p style={{ fontSize: '1.3rem', margin: '8px 0', fontWeight: '600', color: '#5e7a3a' }}>
              {lang.nativeName}
            </p>
            {selectedLanguage === lang.name && (
              <div style={{
                marginTop: '12px',
                padding: '8px 12px',
                background: 'linear-gradient(135deg, #5eb62f 0%, #4fa426 100%)',
                color: 'white',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: '600',
                textAlign: 'center',
              }}>
                ✓ Selected
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LanguagePage
