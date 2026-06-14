import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrightnessWrapper } from './components/Brightness.tsx'
import { TooltipProvider } from './components/ui/tooltip.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
      <BrightnessWrapper>
        <App />
      </BrightnessWrapper>
    </TooltipProvider>
  </StrictMode>,
)
