import CatFact from "../../src/catfacts"

describe('<CatFact />', () => {
  it('Fact Board should display fact', () => {
      cy.mount(<CatFact />)
      cy.get('#factText').should('exist')
  })
})