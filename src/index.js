import React from 'react'
import { createRoot } from 'react-dom/client'

// Simple React component
const App = () => {
  return (
    <div>
      <h1>Welcome to Webpack Setup</h1>
      <p>This is a modern webpack configuration with React and Babel support.</p>
      <p>Current time: {new Date().toLocaleString()}</p>
    </div>
  )
}

// Mount the app to the DOM
const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
} else {
  console.error('Root element not found')
}
