import React from 'react';

export default function PageLoader() {
  return (
    <div 
      className="page-loader-wrapper" 
      role="status" 
      aria-live="polite" 
      aria-label="Loading page content"
    >
      <div className="page-loader-spinner" aria-hidden="true"></div>
      <span className="sr-only">Loading page...</span>
    </div>
  );
}
