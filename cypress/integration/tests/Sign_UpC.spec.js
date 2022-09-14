
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
      cy.get('.homepageBrand')
   
    })
    it('Sign Up as a Client with email credentials', () => {
     cy.get(':nth-child(3) > .navLink', {time:10000}).click({force : true})
     cy.get('[style="padding-top: 0.8rem; padding-left: 1rem; height: 100%;"] > .d-flex > .SignUpPaperText', {timeout:10000})
     cy.get('.MuiButton-root').click({ multiple:true})
     cy.get('#email').type('bultiragno@vusra.com')
     cy.get('#outlined-adornment-password').type('bultiragno@vusra.com')
     cy.get('#confirm-password').type('bultiragno@vusra.com')
     cy.get('.mt-2 > .MuiButton-root').click()
      /*
     //Input fourdigit verification code to be automatically allowed to log in
     cy.get('#email').type('bultiragno@vusra.com')
     cy.get('#outlined-adornment-password').type('bultiragno@vusra.com')
     cy.contains('').should('be.visible').click()
    */
  })
  it('Sign Up as a client with Google credentials', () => {

  })


  it('Sign Up as a client with LinkedIn credentials', () => {

  })
  
  })

})