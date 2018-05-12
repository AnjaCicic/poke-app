import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './containers/Header';
import Home from './routes/home';
import Favourites from './routes/favourites';
import Details from './routes/details';

import configStore from './store';
import './index.scss';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/details/:id" component={Details} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
