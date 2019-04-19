//server.js

import path from 'path';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {createStoreWithMiddleware} from './store/index';
import rootReducer from './reducers/index';
import App from './components/app/index';

const app = Express();
const port = process.env.PORT || 3000;

app.use('/static', Express.static('static'));
app.use(handleRender);

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

const renderFullPage= (html, state)=> {
  return `
  <!doctype html>
  <html>
    <head>
      <title>Redux Universal Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__STATE__ = ${JSON.stringify(state).replace(/</g,'\\u003c')}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `
};

app.listen(port)

console.log(`listening on ${port}`);
