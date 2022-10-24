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
     
      if(device.isMobile==true){
        cy.get('svg[class="MuiSvgIcon-root"]').click()
        cy.get('.MuiListItem-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('a[class="navLink"]').click()
        cy.wait
       // cy.get('#email').clear();
        cy.get('#email', {timeout:2000}).type('jhjhgfdklsrevgl@yopmail.com')
        cy.get('input[id="outlined-adornment-password"]').clear()
        cy.get('input[id="outlined-adornment-password"]').type('jhjhgfdklsrevgl@yopmail.com')
        cy.get('input#confirm-password').clear()
        cy.get('input#confirm-password').type('jhjhgfdklsrevgl@yopmail.com')
        cy.get('button[class="MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMeMuiButtonBase-root.btn.css-1hw9j7s"]').click()

      }else{
        cy.get('.d-flex > :nth-child(2) > .navLink > .btn', {force:true}).click()
        cy.url().should('eq', 'https://connect-dev.amalitech-dev.net/recruiter-login')
        cy.get('p > .navLink').click()
        cy.url().should('eq', 'https://connect-dev.amalitech-dev.net/recruiter-signup')
        cy.get('form > .mt-2 .mb-4 #email').type('jhjhgfdklsrevgl@yopmail.com')
        cy.get('#outlined-adornment-password').type('jhjhgfdklsrevgl@yopmail.com')
        cy.get('#confirm-password').type('jhjhgfdklsrevgl@yopmail.com')
          cy.get('[type="submit"]').click()
      }
        
        
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