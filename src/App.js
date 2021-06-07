import logo from './logo.svg';
import './App.css';

import Mainlogic from './Component/Mainlogic'

// Scrivi un programma che stampi i numeri in caso siano multiply di 5 ritorna Buzz in caso siano multipli di 3 ritorna Fizz
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='App-link'>I numeri in caso siano multiply di 5 ritornerà Buzz in caso siano multipli di 3 ritornerà Fizz in caso siano multipli di 3 e 5 ritornerà FizzBuzz</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <Mainlogic/>
      </header>
    </div>
  );
}

export default App;
