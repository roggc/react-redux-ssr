console.log('src/server');

import path from 'path';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {getStore} from './store/index';
import App from './components/app/index';

const renderFullPage= (html, state)=> {
  return `
  <!doctype html>
  <html>
    <head>
      <title>react-redux-ssr</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__STATE__ = ${JSON.stringify(state).replace(/</g,'\\u003c')}
      </script>
      <script src="/out/client.js"></script>
    </body>
  </html>
  `
};

const handleRender= (req, res)=> {
  const store= getStore();
  const state= store.getState();

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.send(renderFullPage(html, state));
};

const app = express();
const port = process.env.PORT || 3000;
app.use('/out', express.static('out/client'));
app.use(handleRender);
app.listen(port);
console.log(`listening on localhost:${port} ...`);
