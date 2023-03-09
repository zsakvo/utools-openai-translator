import { Routes, Route, HashRouter } from 'react-router-dom'
import Config from '@/pages/config'
import Home from '@/pages/home'
export default function () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </HashRouter>
  )
}
