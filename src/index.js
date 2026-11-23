import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from '../App';
import '../App.css';

// Surface runtime crashes as readable text instead of a white screen.
window.addEventListener('error', (e) => {
  const el = document.getElementById('preview-error');
  if (el) el.textContent = 'Preview error: ' + (e.message || e.error);
});
window.addEventListener('unhandledrejection', (e) => {
  const el = document.getElementById('preview-error');
  if (el) el.textContent = 'Preview error: ' + (e.reason && e.reason.message ? e.reason.message : e.reason);
});

// App is already inside a Router: generated code must NOT add its own
// Router (nested routers crash). HashRouter, not BrowserRouter — previews
// run in sandboxed frames where History-API navigation throws. Use
// Routes/Link/useRoutes freely.
createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);

const fallback = document.createElement('pre');
fallback.id = 'preview-error';
fallback.style.cssText = 'color:#f87171;padding:16px;font-size:13px;white-space:pre-wrap;';
document.body.appendChild(fallback);