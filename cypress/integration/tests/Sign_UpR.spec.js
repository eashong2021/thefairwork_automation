//import { first } from 'cypress/types/lodash'
import { getTestSpecName } from '../../../lib/testSpecName'
import { defaultDevices as devices } from '../_helpers/default-devices'
import { createRegistrationData } from '../../fixtures/shared/user-create'

  const testSpecName = getTestSpecName(__filename)

devices.forEach((device) => {
  const targetUrl = 'https://connect-dev.amalitech-dev.net'
  const userData = createRegistrationData()
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
        cy.get('.d-flex > :nth-child(2) > .navLink > .btn', {force:true}).click()
        cy.url().should('eq', 'https://connect-dev.amalitech-dev.net/recruiter-login')
        cy.get('p > .navLink').click()
        cy.url().should('eq', 'https://connect-dev.amalitech-dev.net/recruiter-signup')
        cy.get('form > .mt-2 .mb-4 #email').type(userData.email)
         
       
        cy.get('#outlined-adornment-password').type(userData.password)
        cy.get('#confirm-password').type(userData.password)
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