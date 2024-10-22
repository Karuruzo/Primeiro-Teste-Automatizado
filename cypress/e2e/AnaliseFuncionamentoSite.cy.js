describe('Testando login com Basic Auth', () => {
    it('Deve realizar login com sucesso usando Basic Auth', () => {
        cy.loginBasicAuthBase64();  // Chama o comando personalizado
       
    });
});
