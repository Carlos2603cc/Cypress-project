class LoginPage {
    // Localizadores (selectores Cypress)
    elements = {
        emailInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        continueButton: () => cy.contains('button', 'Continue'),
        forgotPasswordLink: () => cy.contains('a', 'Forgot password?'),
        signUpLink: () => cy.contains('a', 'Sign up'),
        googleButton: () => cy.contains('button', 'Continue with Google'),
        welcomeTitle: () => cy.contains('h1', 'Welcome'),
        showPassord: () => cy.get('button[data-action="toggle"]')
    };

    // Métodos (acciones reutilizables)
    visit() {
        cy.visit('/ejercicioQA-login.html');  // Ruta relativa al HTML local
    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickContinue() {
        this.elements.continueButton().click();
    }

    clickForgotPassword() {
        this.elements.forgotPasswordLink().click();
    }

    clickSignUp() {
        this.elements.signUpLink().click();
    }

    clickGoogle() {
        this.elements.googleButton().click();
    }

    login(email, password) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickContinue();
    }

    verifyPageLoaded() {
        this.elements.welcomeTitle().should('be.visible');
        this.elements.emailInput().should('be.visible');
        this.elements.passwordInput().should('be.visible');
        this.elements.continueButton().should('be.visible');
    }

}

export default new LoginPage();