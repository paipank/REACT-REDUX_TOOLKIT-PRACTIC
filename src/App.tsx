import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './reducers/CounterSlice';
import { fetchCounterData } from './actions';
import { RootState, AppDispatch } from './store/configureStore';
import { CounterContainer } from './containers';

export function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <p>{counter}</p>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(fetchCounterData(15))}>
        Decrement 15
      </button>
      <div>
        <CounterContainer />
      </div>
    </div>
  );
}

export default App;
