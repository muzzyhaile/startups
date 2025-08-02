import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    console.log('🛡️ ErrorBoundary: Initialized');
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('🚨 ErrorBoundary: Error caught!', error);
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('❌ ErrorBoundary: Component error details:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack
    });
    
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      console.log('💥 ErrorBoundary: Rendering error fallback UI');
      
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace'
        }}>
          <div style={{
            backgroundColor: '#ff0000',
            padding: '30px',
            borderRadius: '10px',
            maxWidth: '800px',
            border: '3px solid #ffff00'
          }}>
            <h1 style={{ 
              fontSize: '48px', 
              marginBottom: '20px',
              textAlign: 'center',
              textShadow: '0 0 10px #ffff00'
            }}>
              🚨 REACT ERROR BOUNDARY 🚨
            </h1>
            
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ color: '#ffff00', fontSize: '24px' }}>Error Details:</h2>
              <p style={{ 
                backgroundColor: '#000', 
                padding: '10px', 
                borderRadius: '5px',
                fontSize: '16px',
                wordBreak: 'break-word'
              }}>
                {this.state.error?.message || 'Unknown error occurred'}
              </p>
            </div>
            
            {this.state.error?.stack && (
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#ffff00' }}>Stack Trace:</h3>
                <pre style={{ 
                  backgroundColor: '#000', 
                  padding: '10px', 
                  borderRadius: '5px',
                  fontSize: '12px',
                  overflow: 'auto',
                  maxHeight: '200px'
                }}>
                  {this.state.error.stack}
                </pre>
              </div>
            )}
            
            {this.state.errorInfo?.componentStack && (
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#ffff00' }}>Component Stack:</h3>
                <pre style={{ 
                  backgroundColor: '#000', 
                  padding: '10px', 
                  borderRadius: '5px',
                  fontSize: '12px',
                  overflow: 'auto',
                  maxHeight: '200px'
                }}>
                  {this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}
            
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button 
                onClick={() => window.location.reload()}
                style={{
                  backgroundColor: '#ffff00',
                  color: '#000',
                  padding: '15px 30px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                🔄 RELOAD PAGE
              </button>
              
              <button 
                onClick={() => this.setState({ hasError: false })}
                style={{
                  backgroundColor: '#00ff00',
                  color: '#000',
                  padding: '15px 30px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                🔄 TRY AGAIN
              </button>
            </div>
            
            <p style={{ 
              textAlign: 'center', 
              marginTop: '20px', 
              fontSize: '14px',
              color: '#ffff00'
            }}>
              Check browser console (F12) for more detailed logs
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
