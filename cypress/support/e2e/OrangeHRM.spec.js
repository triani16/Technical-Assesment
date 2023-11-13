describe('Success Login', () => {
    it('Get commands querying',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("[name='username']")
             .type('Admin')    
             .should('have.value','Admin') 
        cy.get("[name='password']")
             .type('admin123')    
             .should('have.value','admin123')  
        cy.get("button[type='submit']").click()
        cy.contains('Dashboard')
     })

    })

    describe('Success Logout', () => {
        it('Get commands querying',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
            cy.get("[name='username']")
                 .type('Admin')    
                 .should('have.value','Admin') 
            cy.get("[name='password']")
                 .type('admin123')    
                 .should('have.value','admin123')  
            cy.get("button[type='submit']").click()
            cy.get(".oxd-userdropdown-img").click()
            cy.contains('Logout').click()
            cy.contains('Login')
         })
    
        })
        
    describe('Go to Apply Leave', () => {
        it('Get commands querying',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
            cy.get("[name='username']")
                 .type('Admin')    
                 .should('have.value','Admin') 
            cy.get("[name='password']")
                 .type('admin123')    
                 .should('have.value','admin123')
            cy.get("button[type='submit']").click()  
            cy.contains('Leave').click()
            cy.contains('Apply').click()
            cy.contains('No Leave Types with Leave Balance')
         })
    
        })

describe('Cancel Leave', () => {
     it('Get commands querying',()=>{
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
         cy.get("[name='username']")
              .type('Admin')    
              .should('have.value','Admin') 
         cy.get("[name='password']")
              .type('admin123')    
              .should('have.value','admin123')
         cy.get("button[type='submit']").click()  
         cy.contains('Leave').click()
         cy.contains('More').click()
         cy.contains('Assign Leave').click()
         cy.get("input[placeholder='Type for hints...']")
               .type('Paul')    
          cy.contains('Paul Collings').click()
          cy.get("div[class='oxd-select-text oxd-select-text--focus'] div[class='oxd-select-text-input']").click()
          cy.contains('CAN-Personal').click()
          cy.get("input[class='oxd-input oxd-input--focus']").click()
          cy.contains('9').click()
          cy.contains ('To Date')
          cy.get("input[class='oxd-input oxd-input--focus']").click()
          cy.contains('10').click()  
          cy.contains('assign').click()     
          cy.contains ('Confirm Leave Assignment')
          cy.contains ('Cancel').click()   
      })

     })

describe('Update Personal Detail', () => {
     it('Get commands querying',()=>{
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
         cy.get("[name='username']")
              .type('Admin')    
              .should('have.value','Admin') 
         cy.get("[name='password']")
              .type('admin123')    
              .should('have.value','admin123')
         cy.get("button[type='submit']").click()  
         cy.contains('My Info').click()
         cy.contains('Personal Details')
         cy.get("input[placeholder='First Name']").click()
               .clear()
               .type('Michelle')  
               .should('have.value','Michelle')   
          cy.contains('Save').click()
          cy.contains('Successfully Updated')
      })

     })     

describe('Update Contact Detail', () => {
     it('Get commands querying',()=>{
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
         cy.get("[name='username']")
              .type('Admin')    
              .should('have.value','Admin') 
         cy.get("[name='password']")
              .type('admin123')    
              .should('have.value','admin123')
         cy.get("button[type='submit']").click()  
         cy.contains('My Info').click()
         cy.contains('Contact Details').click()
         cy.contains('City')
         cy.contains(".oxd-input.oxd-input--focus").click()
               .clear()
               .type('Bandung')  
               .should('have.value','Bandung')   
          cy.contains('Save').click()
          cy.contains('Successfully Updated')
      })

     })     

describe('Add Job', () => {
     it('Get commands querying',()=>{
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
         cy.get("[name='username']")
              .type('Admin')    
              .should('have.value','Admin') 
         cy.get("[name='password']")
              .type('admin123')    
              .should('have.value','admin123')
         cy.get("button[type='submit']").click()  
         cy.contains('PIM').click()
         cy.contains("div:nth-child(4) div:nth-child(1) div:nth-child(9) div:nth-child(1) button:nth-child(2) i:nth-child(1)").click()
         cy.contains('Job')
         cy.contains('--Select--').click()
         cy.contains('Banker').click()
          cy.contains('Save').click()
          cy.contains('Successfully Updated')
      })
})   

