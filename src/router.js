
import React, { PropTypes } from 'react';
// import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';
import { Router, Route, IndexRoute, Link,useRouterHistory  } from 'react-router';
import examplePage from './routes/examplePage';
 import myTable from './routes/myTable';
 import myForm from './routes/myForm';
import myProgress from './routes/myProgress';
import myCarousel from './routes/myCarousel';

// import { createHashHistory } from 'history'
// // useRouterHistory creates a composable higher-order function
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

export default function({ history }) {
 // alert(3);
  return (
    <Router history={history}>
      <Route path="/" component={examplePage} />
      <Route path="/myTable" component={myTable} />
     <Route path="/myForm" component={myForm} />
      <Route path="/myProgress" component={myProgress} />
      <Route path="/myCarousel" component={myCarousel} />
    </Router>
  );
};
