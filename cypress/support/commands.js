Cypress.Commands.add('loginBasicAuthBase64', () => {
    const username = 'stagingnoor';
    const password = 'sG1{eM0^qJ9_gI6%';

    // Codifica o username:password em Base64
    const authString = btoa(`${username}:${password}`);

    // Usa intercept para modificar as requisições feitas pelo cy.visit()
    cy.intercept('GET', 'https://staging.noorskin.com.br', (req) => {
        req.headers['Authorization'] = `Basic ${authString}`;
    }).as('authRequest');

    // Ignora erros não capturados para evitar falhas de testes por erros da aplicação
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para que o Cypress ignore erros não capturados
        return false;
    });

    // Faz a navegação com o intercept ativo
    cy.viewport(1920, 1080);
    cy.visit('https://staging.noorskin.com.br');

    // Espera a interceptação ser concluída
    cy.wait('@authRequest').then((interception) => {
        cy.log('Interceptação de autenticação completa');
    });
});

Cypress.Commands.add('loginjusto', () => {
    cy.visit('https://www.essentialnutrition.com.br/')

})