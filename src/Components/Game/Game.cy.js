import React from 'react'
import Game from './Game'
import { QuestionBankProvider } from '../../Context/questionBankProvider'
import { HintsProvider } from '../../Context/hintsProvider'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Game />', () => {
  beforeEach(() => {
    cy.mount(
      <HintsProvider>
        <QuestionBankProvider>
          <Router>
            <Game />
          </Router>
        </QuestionBankProvider>
      </HintsProvider>
    )
  })

  it('renders the scam button', () => {
    cy.contains("Scam")
      .should("exist")
  })

  it('renders the not-scam button', () => {
    cy.contains("Not Scam")
      .should("exist")
  })

  it('renders the sender ID', () => {
    cy.get(".CallerID > h3")
      .should("not.be.empty")
  })

  it('renders the message', () => {
    cy.get(".Question")
      .should("not.be.empty")
  })

  it('displays the answer upon clicking the scam button', () => {
    cy.contains("Scam")
      .click()
    cy.get(".modal-overlay")
      .should("exist")
  })

  it('displays the answer upon clicking the not-scam button', () => {
    cy.contains("Not Scam")
      .click()
    cy.get(".modal-overlay")
      .should("exist")
  })
})