import React from 'react'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<App />', () => {
  it('displays the logo and play button', () => {
    cy.mount(
      <Router>
        <App />
      </Router>)
    cy.get("[alt='Scam or not!']")
      .should("exist")
    cy.get(".Button")
      .should("contain", "Play")
  })

  it("redirects to the game page when the play button is clicked", () => {
    cy.mount(
      <Router>
        <App />
      </Router>
    )
    cy.get(".Button")
      .click()
    cy.url().should("include", "/game")
  })
})