import { getTestSpecName } from '../../../lib/testSpecName'
import { defaultDevices as devices } from '../_helpers/default-devices'

  const testSpecName = getTestSpecName(__filename)

devices.forEach((device) => {
  const targetUrl = 'https://connect-dev.amalitech-dev.net'
  describe(`${testSpecName} @@ Visit site- ${device.name}`, () => {
    const [w, h] = device.viewport

    before(() => {
      cy.viewport(w, h)
      cy.clearCookies({ domain: null })
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    })

    beforeEach(() => {
      cy.viewport(w, h)
    })

    afterEach(function () {
      if (this.currentTest.state === 'failed') {
        Cypress.runner.stop()
      }
    })

    it('Should visit TheFairWork homepage', () => {
        cy.visit(targetUrl)
    })

    it('Sign Up  as a Recruiter with email credentials', () => {
       // cy.get('.MuiButtonBase-root > .MuiButton-label', ).click()
          cy.get('.d-flex > :nth-child(2) > .navLink > .MuiButtonBase-root> .MuiButton-label', {force:true})
          .click()
          cy.get('p > .navLink').click()
          //cy.get('.', {multiple: true}).click()
          cy.get('[name=signupEmail]').type('makkanekno@vusra.com').should('eq', 'makkanekno@vusra.com', {timeout: 10000})
          cy.get('#outlined-adornment-password').type('makkanekno@vusra.com')
          cy.get('#confirm-password').type('makkanekno@vusra.com')
          cy.get('[type="submit"]').click()
    })
/*
    it('Log in as a Recruiter with email and forgotten password', () => {

    })


   it('Log in as a Recruiter with Google credentials', () => {

   })


   it('Log in as a Recruiter with LinkedIn credentials', () => {

   })
*/
})
})