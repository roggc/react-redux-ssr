//index.js

import path from 'path';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {createStoreWithMiddleware} from './src/store/index';
import rootReducer from './src/reducers/index';
import App from './src/components/app/index';

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
      <script src="/public/bundle.js"></script>
    </body>
  </html>
  `
};

const handleRender= (req, res)=> {
  let _store;
  if(req.query.state)
  {
    const state= JSON.parse(req.query.state);
    _store= createStoreWithMiddleware(rootReducer, state);
  }
  else
  {
    _store= createStoreWithMiddleware(rootReducer);
  }
  const store= _store;
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const state= store.getState();

  res.send(renderFullPage(html, state));
};

const app = express();
const port = process.env.PORT || 3000;
app.use('/public', express.static('public'));
app.use(handleRender);
app.listen(port)
console.log(`listening on ${port}...`);
