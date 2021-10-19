import './App.css';
import { CounterButton } from './CounterButton';
import { CounterProvider } from './CounterContext';

function App() {
  return (
    <CounterProvider>
      <h1>State Management Example</h1>
      <CounterButton />
    </CounterProvider>
  );
}

export default App;
