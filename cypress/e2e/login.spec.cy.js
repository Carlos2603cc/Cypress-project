import LoginPage from '../pages/loginPages.js';

describe('Login Tests happy path', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.verifyPageLoaded();
    });

    // Casos Positivos
    it('Debería permitir login con credenciales válidas', () => {
        LoginPage.login('test@example.com', 'Password123');
        cy.url().should('include', '/dashboard');
    });

    it('Debería mostrar ojo para toggle password visibility', () => {
        LoginPage.typePassword('test');
        LoginPage.showPassord().click();
        LoginPage.elements.passwordInput().should('have.attr', 'type', 'text');
    });

    // Casos Negativos
    it('Debería mostrar error con email vacío', () => {
        LoginPage.typePassword('Password123');
        LoginPage.clickContinue();
        LoginPage.elements.emailInput().should('have.attr', 'required');
    });

    it('Debería mostrar error con password vacío', () => {
        LoginPage.typeEmail('test@example.com');
        LoginPage.clickContinue();
        LoginPage.elements.passwordInput().should('have.attr', 'required');
    });

    it('Debería mostrar error con email inválido', () => {
        LoginPage.login('invalid-email', 'Password123');
        LoginPage.elements.emailInput().should('have.attr', 'validationMessage', 'Por favor ingresa un correo valido');
    });

    it('Debería deshabilitar botón Continue si los campos estan vacíos', () => {
        LoginPage.elements.continueButton().should('be.disabled');
        LoginPage.typeEmail('test@example.com');
        LoginPage.typePassword('Password123');
        LoginPage.elements.continueButton().should('not.be.disabled');
    });

    // Edge Cases
    it('Debería manejar email con caracteres especiales', () => {
        LoginPage.login('test+special@example.com', 'Password123');
        cy.url().should('include', '/dashboard');
    });

    it('Debería manejar password con caracteres especiales', () => {
        LoginPage.login('testspecial@example.com', 'P@ssw0rd!');
        cy.url().should('include', '/dashboard');
    });

    // Flujos Alternos
    it('Debería navegar a forgot password', () => {
        LoginPage.clickForgotPassword();
        cy.url().should('include', '/password-reset-start');
    });

    it('Debería navegar a sign up', () => {
        LoginPage.clickSignUp();
        cy.url().should('include', '/signup');
    });

    it('Debería iniciar login con Google', () => {
        LoginPage.clickGoogle();
        cy.url().should('include', 'accounts.google.com');
    });

    // Accesibilidad y UI
    it('Debería limpiar campos después de refresh', () => {
        LoginPage.typeEmail('test');
        cy.reload();
        LoginPage.elements.emailInput().should('have.value', '');
    });
});