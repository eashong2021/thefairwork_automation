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
       
    it('has a logo', () => {
        cy.get('.homepageBrand', {timeout: 10000}).should('be.visible');
    })
  

  
    /* ==== Test Created with Cypress Studio ==== */
    it('can find about us page', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://connect-dev.amalitech-dev.net');
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
    });
  })
})