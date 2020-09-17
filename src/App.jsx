import React from 'react'
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import UserPage from './pages/UserPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage/>
        </Route>
        <Route path="/main">
          <MainPage/>
        </Route>
        <Route path="/user/:id/:name/:username/:email/:phone/:website/:addressStreet/:addressSuite/:addressCity/:addressZipcode/:addressGeoLat/:addressGeoLng/:companyName/:companyCatchPhrase/:companyBs">
          <UserPage/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
