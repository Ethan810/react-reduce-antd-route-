/**
 * CANNOT use `import` to import `es5-shim`,
 * because `import` will be transformed to `Object.defineProperty` by babel,
 * `Object.defineProperty` doesn't exists in IE8,
 * (but will be polyfilled after `require('es5-shim')` executed).
 */

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js/fn/object/assign');
require('es6-promise');
require('fetch-ie8');

var MatchMedia = require('match-media');

/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('es5-shim')`.
 */


/*const store = app._store;
console.log("store")
console.log(app)

ReactDOM.render(
  <RouterConfig store={store} />,
  document.getElementById('app')
);*/

const mode = require('./mode').default;
// 1. Initialize
const app = mode();


// 2. Plugins
//app.use({});

// 3. Model
app.model(require('./models/example'));
app.model(require('./models/users'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#app');

