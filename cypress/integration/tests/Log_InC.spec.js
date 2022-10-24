import { getTestSpecName } from '../../../lib/testSpecName'
import { defaultDevices as devices } from '../_helpers/default-devices'
import { login } from '../pages/login.page'
import { logout} from "../pages/logout.page"
  const testSpecName = getTestSpecName(__filename)
import {Users as users } from "C:/Users/EbenezerAshong/Desktop/FreelaceAutomation/cypress/integration/_helpers/users"

users.forEach((user) => {
  devices.forEach((device) => {
  // users.forEach((user) => {
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
        cy.visit(targetUrl)
      })
  
      afterEach(function () {
        if (this.currentTest.state === 'failed') {
          Cypress.runner.stop()
        }
      })
  
      // it('Should visit TheFairWork homepage', () => {
          // cy.visit(targetUrl)
      // })
  
      it(`Log in as a ${user.userType} with valid credentials`, () => {
  
        login(user.email, user.password)
      //  logout()
      
      }) 
      
      it(`Log in as a ${user.userType} with valid credentials`, () => {
  
        login(user.invalidemail, user.password)
       // logout()
      
      })

      it(`Log in as a ${user.userType} with valid credentials`, () => {
  
        login(user.email, user.invalidpassword)
      //  logout()
      
      })

  })
  })
  })
