import { BottomBar } from './components/BottomBar'
import Navbar from './components/nav/Navbar'
import Wallpaper from './components/Wallpaper'

function App() {

  return (
    <main className="w-full h-full flex flex-col overflow-hidden">
      <Navbar />
      <BottomBar />
      <Wallpaper adjustment='cover' />
    </main>
  )
}

export default App
