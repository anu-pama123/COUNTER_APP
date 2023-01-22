import './App.css';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type:"INC" })
  }

  const decrement = () => {
    dispatch({ type:"DEC" })
  }

  const addBy = () => {
    dispatch({ type: "ADD", payload: 10})
  }

  return (
    <div className="App">
      <div className='title-section'>
        <h1 className='title'>COUNTER APP</h1>
      </div>
      <div className='counter'>
        <div className='counter-section'>
          <div className='counter-display'>
            <h2 className='counter-value'>{counter}</h2>
          </div>
          <div className='counter-operation'>
            <div className='increment-button-container'>
              <button className='increment-button' onClick={increment}>Increment</button>
            </div>
            <div className='decrement-button-container'>
              <button className='decrement-button' onClick={decrement}>Decrement</button>
            </div>
            <div className='add-by-button-container'>
              <button className='add-by-button' onClick={addBy}>Add By 10</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
