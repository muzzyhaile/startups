import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import './index.css'

console.log('🚀 main.tsx: Starting React application');

try {
  const rootElement = document.getElementById("root");
  console.log('🎯 main.tsx: Root element found:', rootElement);
  
  if (!rootElement) {
    console.error('❌ main.tsx: Root element not found!');
    document.body.innerHTML = '<div style="color: red; font-size: 24px; padding: 20px;">ERROR: Root element not found!</div>';
  } else {
    console.log('✅ main.tsx: Creating React root and rendering App with ErrorBoundary');
    const root = createRoot(rootElement);
    root.render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
    console.log('✅ main.tsx: App rendered successfully with ErrorBoundary');
  }
} catch (error) {
  console.error('❌ main.tsx: Failed to initialize React app:', error);
  document.body.innerHTML = `<div style="color: red; font-size: 18px; padding: 20px;">REACT INITIALIZATION ERROR: ${error.message}</div>`;
}
