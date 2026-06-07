import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import V1Landing from './views/v1/V1Landing.jsx'
import './views/v1/v1.css'
import V2Landing from './views/v2/V2Landing.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/v1" element={<V1Landing />} />
        <Route path="/v2" element={<V2Landing />} />
        <Route path="/" element={<V2Landing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
