import React from 'react';
import ReactDOM from 'react-dom/client';
import { client, useConfig, useVariable } from '@sigmacomputing/plugin';

client.config.configureEditorPanel([
  { name: 'selectedLink', type: 'variable', label: 'Selected Link', allowedTypes: ['text'] },
]);

function App() {
  const config = useConfig();
  const [rawValue] = useVariable(config.selectedLink);

  const url = rawValue?.defaultValue?.value || null;

  if (!url) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', fontFamily: 'sans-serif', color: '#888',
        fontSize: '1.1rem',
      }}>
        Select a report to preview
      </div>
    );
  }

  return (
    <iframe
      src={url}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="Report Preview"
    />
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
