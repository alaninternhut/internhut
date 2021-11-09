import HomePage from './StartingPage/HomePage'
import { JobForm } from './Form/JobForm'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Track from './Track/Track'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/JobForm' component={JobForm} />
          <Route path='/Track' component={Track} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
