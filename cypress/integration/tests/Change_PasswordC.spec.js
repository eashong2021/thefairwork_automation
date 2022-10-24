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

    it('Log in as a client with email credentials', () => {
      if(device.isMobile==true){
        cy.get('svg[class="MuiSvgIcon-root"]').click()
        cy.contains('Login').click({force:true})
        cy.wait
        cy.get('#email').clear();
        cy.get('#email').type('pepsutulte@vusra.com')
        cy.get('#password').clear()
        cy.get('#password').type('pepsutulte@vusra.com')
        cy.get('[type="submit"]', {timeout: 10000}).click();
      }else{
        cy.get(':nth-child(4) > .navLink.mt-1').click({force: true})
        cy.get('#email').type('pepsutulte@vusra.com')
       cy.get('#password').type('pepsutulte@vusra.com')
       cy.get('.mobileViewTop > .MuiButtonBase-root > .MuiButton-label').click()
      })
      }
       
    
    /*
      

      it('Update client profile', () => {
        //  1.Click on the profile icon

        //  2. Click on “Account Settings” and fill in the form that gets rendered.
          
         // 3. Click on “Change Password”
      })
  */

   
  })
})