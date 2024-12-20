import { Routes, Route } from 'react-router-dom'
import '@/index.css'

import RootLayout from '@/_root/RootLayout'
import { Home, GamesRoot, Games, Other, NotFound } from '@/_root/pages'
import ScoreTracker from './_root/pages/ScoreTracker'

function App() {

  return (
    <main className="flex w-screen h-screen bg-slate-800 text-white">
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/other" element={<Other />} />
            <Route path="/games" element={<GamesRoot />}>
              <Route index element={<Games />} />
              <Route path="/games/ScoreTracker" element={<ScoreTracker />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
  )
}

export default App
