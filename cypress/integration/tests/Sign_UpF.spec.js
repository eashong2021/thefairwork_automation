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
 

   it('Sign Up as a Freelancer with email credentials', () => {
    if(device.isMobile==true){
      cy.get('svg[class="MuiSvgIcon-root"]').click()
      cy.get('div[class="MuiDialogContent-root"]>div:nth-child(2)').should('be.visible').click()
      cy.contains('Sign Up').click({force:true})
      cy.wait
      cy.get('#email').clear();
      cy.get('#email').type(userData.email)
      cy.get('#outlined-adornment-password').clear();
      cy.get('#outlined-adornment-password').type(userData.password);
      cy.get('#confirm-password').clear();
      cy.get('#confirm-password').type(userData.passwordRepeat);
      cy.get('.mt-2 > .MuiButton-root').click();
      cy.get('.form-group > #code1 ').type('e8e8')   //user has to verify with current pin to further automate
      cy.get('#submit')
     
    }else{
      cy.get(':nth-child(3) > .navLink.mt-1', {force: true}).should('be.visible').click();
      cy.get('[style="padding-top: 0.8rem; height: 100%; padding-left: 1rem;"] > .CustomRadioButton').click();
      cy.get('.MuiButton-root').click();
      cy.get('#email').clear();
      cy.get('#email').type(userData.email)
      cy.get('#outlined-adornment-password').clear();
      cy.get('#outlined-adornment-password').type(userData.password);
      cy.get('#confirm-password').clear();
      cy.get('#confirm-password').type('userData.password');
      cy.get('.mt-2 > .MuiButton-root').click();
    }
  })


})
})