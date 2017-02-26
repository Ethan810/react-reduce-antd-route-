import hashHistory from 'react-router/lib/hashHistory';
import {
  routerMiddleware,
  syncHistoryWithStore,
  routerReducer,
} from 'react-router-redux';
import createMode from './createMode';

export default createMode({
  mobile: false,
  initialReducer: {
    'routing':routerReducer,
  },
  defaultHistory: hashHistory,
  routerMiddleware,

  setupHistory(history) {
    this._history = syncHistoryWithStore(history, this._store);
  },
});
