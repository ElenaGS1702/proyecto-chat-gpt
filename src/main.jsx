import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import History from "./History.jsx";
import { GlobalProvider } from "./context/global-context.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <GlobalProvider>
        <History />
        <App />
      </GlobalProvider>
    </div>
  </StrictMode>,
)
