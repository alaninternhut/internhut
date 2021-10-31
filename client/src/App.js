import { Main } from './StartingPage/Main'
import { JobForm } from './Form/JobForm'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/JobForm' component={JobForm} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
