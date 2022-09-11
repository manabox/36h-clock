import { useState, useEffect, useMemo } from 'react'
import 'normalize.css'
import Clock36 from './components/Clock36'
import Clock24 from './components/Clock24'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import useLocalStorage from './components/useLocalStorage'
import OptShowSeconds from './components/menu/OptShowSeconds'
import OptShow24h from './components/menu/OptShow24h'
import OptDarkmode from './components/menu/OptDarkmode'

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

  // Menu
  const [openMenu, setOpenMenu] = useState(false)
  const menuToggle = () => {
    setOpenMenu(!openMenu)
  }

  // Show Seconds
  const [showSeconds, setShowSeconds] = useLocalStorage('SecondsChecked', true)
  const showSecondsToggle = useMemo(() => {
      return (e) => {
        setShowSeconds(e.target.checked)
      }
  }, [])

  // Show 24-hour clock
  const [show24H, setShow24H] = useLocalStorage('24hClockChecked', true)
  const show24HToggle = useMemo(() => {
      return (e) => {
        setShow24H(e.target.checked)
      }
  }, [])

  // Dark mode
  const [darkMode, setDarkMode] = useLocalStorage('DarkModeChecked', false)
  const darkModeToggle = useMemo(() => {
      return (e) => {
        setDarkMode(e.target.checked)
      }
  }, [])

  return (
    <div className="App">
      <Clock36 date={date} showSeconds={showSeconds} />
      { show24H && <Clock24 date={date} /> }
      <Navigation openMenu={openMenu} menuToggle={menuToggle}>
        <OptShowSeconds
          showSeconds={showSeconds}
          showSecondsToggle={showSecondsToggle}
        />
        <OptShow24h
          show24H={show24H}
          show24HToggle={show24HToggle}
        />
        <OptDarkmode
          darkMode={darkMode}
          darkModeToggle={darkModeToggle}
        />
      </Navigation>
      <Footer />
      { darkMode && (
        <style>{`
          :root {
              --fontColor: #ddd;
              --bgColor: #000;
              --transparentColor: rgba(255,255,255,.2);
          }
        `}</style>
      )}
    </div>
  )
}

export default App
