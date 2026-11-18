import { client } from '@sigmacomputing/plugin';

client.config.configureEditorPanel([
  { name: 'source', type: 'element' },
  {
    name: 'embedUrl',
    type: 'column',
    source: 'source',
    allowedTypes: ['text'],
  },
]);

const frame = document.getElementById('preview');
const placeholder = document.getElementById('placeholder');

client.elements.subscribeToElementData(
  client.config.getKey('source'),
  function (data) {
    var col = data[client.config.getKey('embedUrl')];
    var url = Array.isArray(col) && col[0];
    if (url && url !== frame.src) {
      frame.src = url;
      frame.style.display = 'block';
      placeholder.style.display = 'none';
    }
  }
);
