import { Routes, Route } from 'react-router-dom'
import '@/index.css'

import RootLayout from '@/_root/RootLayout'
import { Home, GamesRoot, Games, Other, NotFound, PointTracker } from '@/_root/pages'

function App() {

  return (
    <main className="flex w-screen h-screen bg-slate-800 text-white">
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/other" element={<Other />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games" element={<GamesRoot />}>
              <Route path="/games/PointTracker" element={<PointTracker />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
  )
}

export default App
