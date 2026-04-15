
import './App.css'
import Routing from './Route/Routing'
import {BrowserRouter as Router} from 'react-router-dom';
import StateContext from './Components/context api/StateContext';

function App() {

  return (
        <Router>
          <StateContext>
            <Routing />
          </StateContext>
        </Router>
  )
}

export default App
