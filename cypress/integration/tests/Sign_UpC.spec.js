
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
    it('Sign Up as a Client with email credentials', () => {
     cy.get(':nth-child(3) > .navLink').click({force: true})
     cy.get('[style="padding-top: 0.8rem; padding-left: 1rem; height: 100%;"] > .CustomRadioButton').click() 
     cy.get('.MuiButton-root').click({ multiple:true})
     cy.get('#email').type(userData.email)
     cy.get('#outlined-adornment-password').type(userData.password)
     cy.get('#confirm-password').type(userData.password)
     cy.get('.mt-2 > .MuiButton-root').click()
    
  })
    /*
    it('Sign Up as a client with Google credentials', () => {
     // cy.get(':nth-child(3) > .navLink', {time:10000}).click({force : true})
    })


    it('Sign Up as a client with LinkedIn credentials', () => {

    })
   */

    /* ==== Test Created with Cypress Studio ==== */
   
  })

})