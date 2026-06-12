import { useState } from 'react'
import Navbar from './components/Navbar'
import Wallpaper from './components/Wallpaper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Wallpaper adjustment='cover' />
    </main>
  )
}

export default App
