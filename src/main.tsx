import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global error capturing for Chrome Mobile debugging
if (typeof window !== 'undefined') {
  const logError = (type: string, message: string, stack?: string) => {
    console.error('[GlobalError]', type, message, stack);
    
    // Only send to webhook in production to avoid spam during development
    if (import.meta.env.PROD) {
      fetch('https://webhook.site/f8e7d4c3-2a1b-4596-9f3e-8d7c6b5a4938', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          message,
          stack,
          url: window.location.href,
          ua: navigator.userAgent,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {
        // Silently fail to not interfere with app functionality
      });
    }
  };

  window.addEventListener('error', (event) => {
    logError('error', event.message, event.error?.stack);
  });

  window.addEventListener('unhandledrejection', (event) => {
    logError('unhandledrejection', String(event.reason), event.reason?.stack);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
