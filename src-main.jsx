import React from 'react';
import ReactDOM from 'react-dom/client';
import { client, useConfig, useElementData } from '@sigmacomputing/plugin';

client.config.configureEditorPanel([
  { name: 'source', type: 'element', label: 'Data Source' },
  {
    name: 'embedUrl',
    type: 'column',
    source: 'source',
    allowMultiple: false,
    label: 'Embed URL',
  },
]);

function App() {
  const config = useConfig();
  const sigmaData = useElementData(config.source);

  const url = sigmaData && sigmaData[config.embedUrl]
    ? sigmaData[config.embedUrl][0]
    : null;

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
