import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correctly imported
import './index.css';
import App from './App.jsx';

import { StateContextProvider } from './context/index.jsx';

// Use createRoot directly
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </StrictMode>
);
