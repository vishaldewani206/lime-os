import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrightnessWrapper } from './components/Brightness.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrightnessWrapper>
      <App />
    </BrightnessWrapper>
  </StrictMode>,
)
