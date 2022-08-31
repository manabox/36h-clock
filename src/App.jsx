import { useState, useEffect } from 'react'
import 'normalize.css'
import './App.css'
import Clock36 from './components/Clock36'
import Clock24 from './components/Clock24'
import Footer from './components/Footer'

function App() {
  // Get Current Date
  const [date, setDate] = useState(new Date())

  function refreshClock() {
      setDate(new Date());
  }
  useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
          clearInterval(timerId);
      };
  }, []);

  return (
    <div className="App">
      <Clock36 date={date} />
      <Clock24 date={date} />
      <Footer />
    </div>
  )
}

export default App
