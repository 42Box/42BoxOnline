import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './routes/Home'
import Box from './routes/Box'
import Token from './Token'

function App() {
  return <Router>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/home" element={<Token />}/>
      <Route exact path="/box" element={<Box />}/>
    </Routes>
  </Router>
}

export default App;