import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* element {
      width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
} */}
    <div className="drop-shadow-lg" style={{
      width: '45%',
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      margin: '0 auto',
      padding: '20px',
    }}>
      <App />

    </div>
  </React.StrictMode>,
)
