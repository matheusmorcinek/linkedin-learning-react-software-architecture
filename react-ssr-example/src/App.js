import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import styled from 'styled-components';

const BigGreenHeading = styled.h1`
  color: green;
  font-size: 96px;
`;

function App() {
  return (
    <div>
      <BigGreenHeading>Server-Side Rendering Example</BigGreenHeading>
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
