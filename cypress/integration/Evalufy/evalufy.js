import '@4tw/cypress-drag-drop'
describe('Evalfy_test', ()=> {
    it('Create_test', () => {
    //Handling uncaught excecption
    Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    //Setting View Dimensions
    cy.viewport(1280, 720)
    //Visiting Web
    cy.visit('https://test.evalufy.com/', {failOnStatusCode: false})
    //login
    cy.get('#username').type('evteam@bayt.net')
    cy.get('#password').type('Test@123')
    cy.get('#kc-login').click()
    cy.wait(10000)
    //Assement Creation
    cy.get('.upgrade-container > .primary > .v-btn__content').click()
    cy.wait(2000)
    //Switching on 'Auto Scoring'
    cy.get("div.v-input--selection-controls__ripple").eq(1).click();

    //Setting autoscoring criteria.
    cy.get("div.v-menu__activator").click();
    cy.get("i.v-icon.v-icon--link.material-icons.theme--light.gray--text").eq(1).click();
    cy.wait(1000)
    cy.get('.v-toolbar__content > span[data-v-2982164e=""] > .v-icon').click()
    cy.wait(1000)
    //Assessment Title
    cy.get('.v-text-field__slot > input').clear().wait(1000).type('Automated_Test')
    //Adding Question
    cy.get('span').contains(' Short Text ').drag('div.containerFields.dragArea',{force:true});
    cy.get("div.v-text-field__slot").eq(2).click().type("What is your pet name?");
    cy.get('div.v-text-field__slot').eq(2).click().type('ABC')
    cy.get('.v-btn__content').contains(' Send ').click()
    cy.wait(5000)
    
    cy.get('button').contains('Next').click({force:true})
    cy.wait(5000)
    cy.get('div.upgrade-container input[type="checkbox"]').click({force:true})
    
    //Get the URL.
    cy.get('span.text-truncate').then(link => {
    var URL = link.text()
    //Click 'Next'.
    cy.get('button').contains('Next').click({force:true})
    cy.wait(5000)

    //Click 'Dispatch'.
    cy.get('button').contains('Dispatch').click({force:true})
    cy.wait(5000)

    //Visit generated URL to take assesment.
    cy.visit(URL)
})
    cy.wait(10000);

    //Entering Candidate First name
    cy.get('form.v-form input[name="firstName"]').type('Automated')

    //Entering Candidate Last name
    cy.get('form.v-form input[name="lastName"]').type('testing')

    //Entering Candidate 'E-mail'
    cy.get('form.v-form input[name="email"]').type('testuser@testing.com');

    //Click on Start buton to Get Started With Assesment.
    cy.get('button').contains('Start').click({force:true});
    cy.wait(5000);


    //Click on 'Start'
    cy.get('button').contains('Start').click({force:true});
    cy.wait(2000)

    //Clicking on Agree.
    cy.get('button').contains('Agree').click();
    cy.wait(2000); 
    //Answering the question 
    cy.get('form > .v-input').type('abc')
    cy.get('.v-btn__content').contains(' Submit ').click()




    })

})