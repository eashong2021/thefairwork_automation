import { defaultDevices as devices } from '../_helpers/default-devices'

export function login(email, password){
    if(devices.isMobile==true){
        cy.get('svg[class="MuiSvgIcon-root"]').click()
        cy.contains('Login').click({force:true})
        cy.wait
        cy.get('#email').clear();
        cy.get('#email').type(email)
        cy.get('#password').clear()
        cy.get('#password').type(password)
        cy.get('[type="submit"]', {timeout: 10000}).click();

      }else{
        cy.get(':nth-child(4) > .navLink.mt-1').click({force: true})
        cy.get('#email').clear();
        cy.get('#email').type(email)
        cy.get('#password').clear()
       cy.get('#password').type(password)
       cy.get('.mobileViewTop > .MuiButtonBase-root > .MuiButton-label').click()
      }
}
