import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import './index.css'



try {
  const rootElement = document.getElementById("root");

  
  if (!rootElement) {

    document.body.innerHTML = '<div style="color: red; font-size: 24px; padding: 20px;">ERROR: Root element not found!</div>';
  } else {

    const root = createRoot(rootElement);
    root.render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );

  }
} catch (error) {

  document.body.innerHTML = `<div style="color: red; font-size: 18px; padding: 20px;">REACT INITIALIZATION ERROR: ${error.message}</div>`;
}
