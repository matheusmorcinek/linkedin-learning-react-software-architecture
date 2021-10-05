import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';

function App() {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/articles'>Articles</Link>
          </li>
          <li>
            <Link to='/blog'>test</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About}/>
        <Route path='/articles' component={Articles} />
        <Route path='/blog' component={() => <p>test</p>} />
      </Switch>
    </div>
  );
};

export default App;
