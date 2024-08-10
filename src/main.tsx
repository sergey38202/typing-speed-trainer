import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary/index.tsx'
import store from './store/store'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
         <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
);
