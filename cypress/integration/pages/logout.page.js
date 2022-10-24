export function logout(){
   
        //cy.get('img.MuiAvatar-img').click()
       // cy.get('logout.profile-icon').trigger('mouseover')
       // cy.get('logout.hidden').invoke('show').click({ force: true })
        
      cy.get('//p[@class="mt-3 avatarNav"]').trigger("mouseover")
      

       // cy.get('p.mt-3 avatarNav').click()
        cy.get('logout.hidden').invoke('show').click({ force: true })
      //  cy.get('logout.profile-icon').trigger('mouseover')
        //cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd').click()
        
}
