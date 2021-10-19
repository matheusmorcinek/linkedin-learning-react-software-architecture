import { Provider } from 'react-redux';
import { store } from './store'
import './App.css';
import { CounterButton } from './CounterButton';

function App() {
  return (
    <Provider store={store}>
      <h1>State Management Example</h1>
      <CounterButton />
    </Provider>
  );
}

export default App;
