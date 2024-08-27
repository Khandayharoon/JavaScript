import { useState } from 'react';
import ButtonLogic from '../components/ButtonLogic';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonLogic count={count} setCount={setCount} />
    </>
  );
}

export default App;
