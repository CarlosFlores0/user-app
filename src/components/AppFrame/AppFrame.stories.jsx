import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router} from 'react-router-dom'

export default {
  title: "AppFrame",
  component: AppFrame
}

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quidem fugit doloremque fuga. Maxime asperiores repellendus dolore aliquam saepe dolorum nesciunt atque non enim magni, totam, maiores voluptate ex harum.
    </AppFrame>
  </Router>
)