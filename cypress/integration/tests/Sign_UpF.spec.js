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

   it('Sign Up in as a Freelancer with email credentials', () => {
        cy.get(':nth-child(3) > .navLink').click({force: true})
        cy.get('[style="padding-top: 0.8rem; height: 100%; padding-left: 1rem;"] > .CustomRadioButton', {timeout:10000})
        cy.get('.MuiButton-root').click()
        cy.get('#email').type('cegnudulmo@vusra.com')
        cy.get('#outlined-adornment-password').type('cegnudulmo@vusra.com')
        cy.get('#confirm-password').type('cegnudulmo@vusra.com')
        cy.get("[type=submit]").click()
    })



  it('Log in as a Freelancer with Google credentials', () => {


   })

 /*
   it('Log in as a Freelancer with LinkedIn credentials', () => {

   })
*/
})
})